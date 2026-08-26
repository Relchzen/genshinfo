"use client";

import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { FASE_LEPAS, FASE_TIBA } from "./gacha-fase";

// ===== Koreografi intro (satuan: tinggi viewport yang sudah digulir) =====
// p 0          : Primogem diam di tengah, intinya berdenyut pelan
// p FASE_LEPAS : melesat ke kanan-atas sambil berputar (ala kartu gacha)
// p FASE_TIBA  : menukik sebagai bintang jatuh; impak: kilatan cyan + cincin +
//                cahaya menerangi dunia
// p > FASE_TIBA: Primogem melayang naik ke sepertiga atas, judul & CTA bangun

type Progres = { current: number };

function clamp01(x: number) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// PRNG berbibit supaya ladang bintang identik di setiap muat
function buatAcak(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function LadangBintang() {
  const posisi = useMemo(() => {
    const acak = buatAcak(20260826);
    const arr = new Float32Array(320 * 3);
    for (let i = 0; i < 320; i++) {
      arr[i * 3] = (acak() - 0.5) * 26;
      arr[i * 3 + 1] = (acak() - 0.4) * 16;
      arr[i * 3 + 2] = -1.5 - acak() * 5.5;
    }
    return arr;
  }, []);

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[posisi, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#cfe4ff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Profil putar Primogem: gemuk di ekuator, ujung membulat atas-bawah,
// dilathe 7 sisi agar muncul faset datar kristal saat flat shading.
function profilPrimogem() {
  const kunci = [
    { y: -1.0, r: 0.02 },
    { y: -0.85, r: 0.3 },
    { y: -0.5, r: 0.68 },
    { y: -0.16, r: 0.82 },
    { y: 0.2, r: 0.7 },
    { y: 0.52, r: 0.5 },
    { y: 0.76, r: 0.28 },
    { y: 0.92, r: 0.11 },
    { y: 1.0, r: 0.02 },
  ];
  const kurva = new THREE.CatmullRomCurve3(
    kunci.map((t) => new THREE.Vector3(t.r, t.y, 0)),
  );
  return kurva
    .getPoints(44)
    .map((v) => new THREE.Vector2(Math.max(0.002, v.x), v.y));
}

// Tekstur pijat radial untuk kilatan & inti bintang
function teksturPijat(inside: string, outside: string) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, inside);
  g.addColorStop(0.3, outside);
  g.addColorStop(1, "rgba(120,220,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function Meteor({ progres }: { progres: Progres }) {
  // Kristal Primogem: lathe 7 sisi, faset datar
  const geometriPermata = useMemo(() => {
    const g = new THREE.LatheGeometry(profilPrimogem(), 7);
    g.scale(1.18, 1.18, 1.18);
    g.computeVertexNormals();
    return g;
  }, []);

  const materiPermata = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#b9edff",
        metalness: 0.15,
        roughness: 0.17,
        clearcoat: 1,
        clearcoatRoughness: 0.14,
        flatShading: true,
        emissive: new THREE.Color("#33bfe4"),
        emissiveIntensity: 0.12,
      }),
    [],
  );

  const grup = useRef<THREE.Group>(null);
  const inti = useRef<THREE.Sprite>(null);
  const lampu = useRef<THREE.PointLight>(null);
  const ekor = useRef<THREE.Mesh>(null);
  const kilat = useRef<THREE.Sprite>(null);
  const gelombang = useRef<THREE.Mesh>(null);

  const materiInti = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: teksturPijat("rgba(240,255,255,1)", "rgba(110,225,255,0.55)"),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );
  const teksturKilat = useMemo(
    () => teksturPijat("rgba(235,252,255,1)", "rgba(140,230,255,0.6)"),
    [],
  );

  const [kurangiMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  // Ekor: silinder terbuka, kepala di origin memanjang ke +Y
  const geometriEkor = useMemo(() => {
    const g = new THREE.CylinderGeometry(0.07, 0.58, 1, 24, 1, true);
    g.translate(0, 0.5, 0);
    return g;
  }, []);

  const materiEkor = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        uniforms: { kuat: { value: 0 } },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          varying vec3 vN;
          varying vec3 vV;
          void main() {
            vUv = uv;
            vN = normalMatrix * normal;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vV = -mv.xyz;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec2 vUv;
          varying vec3 vN;
          varying vec3 vV;
          uniform float kuat;
          void main() {
            float sepanjang = 1.0 - vUv.y;
            float tepi = pow(abs(dot(normalize(vN), normalize(vV))), 0.55);
            vec3 warna = mix(vec3(0.55, 0.92, 1.0), vec3(0.92, 1.0, 1.0), sepanjang * sepanjang);
            float a = sepanjang * sepanjang * (0.30 + 0.70 * tepi) * kuat;
            gl_FragColor = vec4(warna * a, a);
          }
        `,
      }),
    [],
  );

  const tmp = useMemo(
    () => ({
      A: new THREE.Vector3(),
      B: new THREE.Vector3(),
      C: new THREE.Vector3(),
      D: new THREE.Vector3(),
      pos: new THREE.Vector3(),
      arah: new THREE.Vector3(),
      lalu: new THREE.Vector3(),
      sumbuY: new THREE.Vector3(0, 1, 0),
      qTarget: new THREE.Quaternion(),
      init: false,
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!grup.current) return;
    const vp = state.viewport;
    const d = Math.min(delta, 0.05);
    const waktu = state.clock.elapsedTime;

    const p = kurangiMotion ? FASE_TIBA + 0.32 : progres.current;

    tmp.A.set(0, 0.05, 0);
    tmp.B.set(vp.width * 0.3, vp.height * 0.34, 0);
    tmp.C.set(0, -0.08, 0);
    tmp.D.set(0, vp.height * 0.19, 0);

    const eLepas = 1 - Math.pow(1 - clamp01(p / FASE_LEPAS), 3);
    const mentah = clamp01((p - FASE_LEPAS) / (FASE_TIBA - FASE_LEPAS));
    const eJatuh = mentah * mentah * mentah;

    tmp.pos.lerpVectors(tmp.A, tmp.B, eLepas);
    tmp.pos.lerpVectors(tmp.pos, tmp.C, eJatuh);

    if (!tmp.init) {
      tmp.lalu.copy(tmp.pos);
      tmp.init = true;
    }

    // Setelah impak: melayang naik ke sepertiga atas, menyusut lembut
    const eSetel = 1 - Math.pow(1 - clamp01((p - FASE_TIBA) / 0.32), 3);
    tmp.pos.lerpVectors(tmp.pos, tmp.D, eSetel);

    const skala =
      lerp(Math.min(vp.width * 0.05 + 1.0, 1.6), 1.05, clamp01((p - FASE_TIBA) / 0.2)) *
      (1 + Math.sin(waktu * 1.6) * 0.015);
    grup.current.position.copy(tmp.pos);
    grup.current.scale.setScalar(skala);

    // Orientasi: goyang -> berputar saat lepas -> menghadap arah jatuh ->
    // menetap miring santai dengan goyangan idup
    if (p > FASE_TIBA + 0.05) {
      tmp.qTarget.setFromAxisAngle(tmp.sumbuY, waktu * 0.35);
      grup.current.quaternion.slerp(tmp.qTarget, 0.06);
      grup.current.rotation.z = Math.sin(waktu * 0.9) * 0.08;
    } else if (eJatuh > 0.03 && p <= FASE_TIBA + 0.02) {
      tmp.arah.subVectors(tmp.lalu, tmp.pos);
      if (tmp.arah.lengthSq() > 1e-7) {
        tmp.arah.normalize();
        tmp.qTarget.setFromUnitVectors(tmp.sumbuY, tmp.arah);
        grup.current.quaternion.slerp(tmp.qTarget, clamp01(eJatuh * 1.4));
      }
    } else {
      grup.current.rotation.y = Math.sin(waktu * 0.5) * 0.4 + eLepas * waktu * 6 * (1 - eJatuh);
      grup.current.rotation.z = Math.sin(waktu * 0.7) * 0.06;
    }

    // Kecepatan -> ekor komet
    tmp.arah.subVectors(tmp.lalu, tmp.pos);
    const laju = tmp.arah.length() / Math.max(d, 1e-4);
    tmp.lalu.copy(tmp.pos);

    const redam =
      clamp01(1 - (p - FASE_TIBA) / 0.07) * (eJatuh * 0.9 + eLepas * 0.4);
    const kuat = clamp01(laju * 0.17) * redam;
    materiEkor.uniforms.kuat.value = kuat;

    if (ekor.current) {
      if (kuat < 0.02) {
        ekor.current.scale.set(0, 0, 0);
      } else {
        tmp.arah.normalize();
        ekor.current.position.copy(grup.current.position);
        ekor.current.quaternion.setFromUnitVectors(tmp.sumbuY, tmp.arah);
        const panjang = Math.min(laju * 0.11, 3.4) * skala;
        ekor.current.scale.set(skala * 0.85, panjang, skala * 0.85);
      }
    }

    // Inti bintang di dalam permata: denyut naik saat menukik, stabil sesudahnya
    if (inti.current) {
      const denyut =
        0.55 +
        Math.sin(waktu * 2.1) * 0.08 +
        eJatuh * 0.5 * clamp01(1 - (p - FASE_TIBA) / 0.12);
      inti.current.scale.setScalar(denyut * skala);
      materiInti.opacity = p >= FASE_TIBA ? 0.95 : 0.8;
    }
    materiPermata.emissiveIntensity =
      0.06 + eJatuh * 0.5 * clamp01(1 - (p - FASE_TIBA) / 0.14) + (p >= FASE_TIBA ? 0.05 : 0);

    // Kilatan impak
    if (kilat.current) {
      const mat = kilat.current.material as THREE.SpriteMaterial;
      const f = clamp01((p - FASE_TIBA) / 0.4);
      const nyala = p >= FASE_TIBA && f < 1;
      kilat.current.visible = nyala;
      if (nyala) {
        kilat.current.position.copy(tmp.C);
        kilat.current.scale.setScalar((0.8 + f * f * 10) * skala);
        mat.opacity = Math.pow(1 - f, 1.7);
      }
    }

    // Cincin gelombang kejut
    if (gelombang.current) {
      const mat = gelombang.current.material as THREE.MeshBasicMaterial;
      const f = clamp01((p - FASE_TIBA) / 0.55);
      const aktif = p >= FASE_TIBA && f < 1;
      gelombang.current.visible = aktif;
      if (aktif) {
        gelombang.current.position.copy(tmp.C);
        gelombang.current.scale.setScalar((0.4 + f * 7.5) * skala);
        mat.opacity = Math.pow(1 - f, 2) * 0.6;
      }
    }

    // Cahaya Primogem: ikut posisinya; ledakan saat impak, menetap hangat-dingin
    if (lampu.current) {
      const menukik = 18 * eJatuh;
      const ledakan = 150 * Math.exp(-Math.max(0, p - FASE_TIBA) * 6);
      const menetap = 26 * clamp01((p - FASE_TIBA) / 0.1);
      lampu.current.intensity = kurangiMotion ? 24 : menukik + ledakan + menetap;
    }
  });

  return (
    <>
      {/* Ekor dirender sebelum permata agar urutan transparansi benar */}
      <mesh ref={ekor} geometry={geometriEkor} material={materiEkor} frustumCulled={false} renderOrder={2} />

      <group ref={grup}>
        <mesh geometry={geometriPermata} material={materiPermata} renderOrder={3} />
        {/* Inti bintang sang Primogem */}
        <sprite ref={inti} material={materiInti} renderOrder={4} scale={0.55} />
        {/* Cahaya permata mengikuti wherever ia pergi */}
        <pointLight ref={lampu} color="#8ee6ff" distance={0} decay={2} intensity={0} />
      </group>

      <sprite ref={kilat} visible={false} renderOrder={4}>
        <spriteMaterial
          map={teksturKilat}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>

      {/* Cincin gelombang kejut, menghadap kamera */}
      <mesh ref={gelombang} visible={false} renderOrder={4}>
        <ringGeometry args={[0.92, 1, 64]} />
        <meshBasicMaterial
          color="#9fe8ff"
          transparent
          opacity={0}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Pemantul cahaya: dunia di belakang yang ikut tersinari */}
      <mesh position={[0, 0, -7]}>
        <planeGeometry args={[70, 44]} />
        <meshStandardMaterial color="#0e1830" roughness={0.95} metalness={0} />
      </mesh>
    </>
  );
}

export default function GachaScene({ progres }: { progres: Progres }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.25} />
      {/* Cahaya panggung dingin dari kiri; kontra bagi cahaya cyan permata */}
      <directionalLight position={[-6, 3, 4]} intensity={0.8} color="#bcd8ff" />
      {/* Isian lembut dari kanan-belakang untuk garis tepi kristal */}
      <directionalLight position={[5, -2, -3]} intensity={0.5} color="#7fd8ff" />
      <LadangBintang />
      <Meteor progres={progres} />
    </Canvas>
  );
}

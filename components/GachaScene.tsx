"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Primogem3D } from "./PrimogemModel";

type Progres = { current: number };

const smoothstep = (t: number) => t * t * (3 - 2 * t);

function buatAcak(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// 1. Ladang Bintang Semesta (Cosmic Starfield) di sekeliling dunia 3D
function CosmicStarfield({ count = 1200 }: { count?: number }) {
  const { positions, colors } = useMemo(() => {
    const acak = buatAcak(777);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Distribusi bola luas
      const theta = acak() * Math.PI * 2;
      const phi = Math.acos(2 * acak() - 1);
      const r = 20 + acak() * 90;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const palet = acak();
      if (palet < 0.45) {
        c.set("#72dbf8"); // Cyan / Anemo / Primogem blue
      } else if (palet < 0.75) {
        c.set("#e9c46a"); // Emas bintang
      } else if (palet < 0.9) {
        c.set("#c084fc"); // Ungu wish 4-star
      } else {
        c.set("#ffffff"); // Putih murni
      }

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 2. Debu Kecepatan & Partikel Bintang yang Mengelilingi Kita (seperti portofolio)
// Saat kamera meluncur maju (zoom in), partikel memanjang searah gerak (warp streak effect)
function WarpSpeedDust({ count = 650 }: { count?: number }) {
  const ref = useRef<THREE.Group>(null);
  const { camera } = useThree();

  // Partikel tersebar di sepanjang lorong sumbu Z dari depan kamera hingga melampaui Primogem
  const positions = useMemo(() => {
    const acak = buatAcak(333);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Menyebar di silinder koridor di sekitar sumbu Z
      const radius = 0.8 + Math.sqrt(acak()) * 7.5;
      const angle = acak() * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = 12 - acak() * 38; // dari Z=12 sampai Z=-26
    }
    return arr;
  }, [count]);

  const tailScale = useMemo(() => {
    const acak = buatAcak(555);
    return Float32Array.from({ length: count }, () => 0.6 + acak() * 1.0);
  }, [count]);

  const linePositions = useMemo(() => new Float32Array(count * 2 * 3), [count]);
  const sim = useRef<{ prev: THREE.Vector3 | null; vel: number }>({
    prev: null,
    vel: 0,
  });

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.04;
    }

    const s = sim.current;
    const p = camera.position;
    if (!s.prev) s.prev = p.clone();
    const dt = Math.max(delta, 1e-4);
    const dx = p.x - s.prev.x;
    const dy = p.y - s.prev.y;
    const dz = p.z - s.prev.z;
    const inst = Math.hypot(dx / dt, dy / dt, dz / dt);
    s.prev.copy(p);
    s.vel += (inst - s.vel) * Math.min(1, dt * 8);

    // Kecepatan di atas ambang batas memicu ekor streak (warp effect)
    const v = Math.max(0, s.vel - 0.2);
    const len = Math.min(3.2, v * 0.18);
    const lineMesh = ref.current?.children?.[1] as THREE.LineSegments | undefined;
    const mat = lineMesh?.material as THREE.LineBasicMaterial | undefined;
    if (mat) {
      mat.opacity = Math.min(0.75, v * 0.08);
    }

    // Arah pergerakan garis
    const mag = Math.hypot(dx, dy, dz) || 1;
    const ux = -dx / mag;
    const uy = -dy / mag;
    const uz = -dz / mag;

    const attr = lineMesh?.geometry?.attributes?.position as THREE.BufferAttribute | undefined;
    if (attr) {
      for (let i = 0; i < count; i++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        const z = positions[i * 3 + 2];
        const l = len * tailScale[i];

        linePositions[i * 6] = x;
        linePositions[i * 6 + 1] = y;
        linePositions[i * 6 + 2] = z;
        linePositions[i * 6 + 3] = x + ux * l;
        linePositions[i * 6 + 4] = y + uy * l;
        linePositions[i * 6 + 5] = z + uz * l;
      }
      attr.array.set(linePositions);
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={ref}>
      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#9ee7ff"
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#64d8ff"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

// 3. Inti Nebula & Halo Bersinar di sekitar Primogem
function PrimogemHalo() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const s = 1.0 + Math.sin(t * 2.0) * 0.08;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.1, 32, 32]} />
      <meshBasicMaterial
        color="#00e5ff"
        transparent
        opacity={0.12}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// 4. Rig Kamera & Primogem dengan Zoom-In Imersif ala Portofolio
function ImmersiveRig({ progres, children }: { progres: Progres; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const primoGroup = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const mouse = useRef(new THREE.Vector2());
  const cur = useRef({
    pos: new THREE.Vector3(0, 0, 8.5),
    tgt: new THREE.Vector3(0, 0, 0),
  });
  const { camera } = useThree();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    const rawProgress = progres.current; // ~ 0 to 2.2
    // Normalisasi progres scroll (0 sampai 1 pada zoom penuh)
    const tZoom = smoothstep(Math.min(1, Math.max(0, rawProgress / 1.35)));

    // Stasiun Kamera:
    // Awal (p=0): Kamera di [0, 0.4, 8.5], melihat ke Primogem di [0, 0, 0]
    // Zoom In (p=1+): Kamera meluncur masuk menembus awan bintang hingga mendekati [0, 0.1, -5.5],
    // Primogem sendiri meluncur perlahan ke Z=-8 dan membesar megah
    const primoZ = -8 * tZoom;
    const primoScale = 1.0 + tZoom * 1.6;

    if (primoGroup.current) {
      primoGroup.current.position.set(0, 0, primoZ);
      primoGroup.current.scale.set(primoScale, primoScale, primoScale);

      // Rotasi lembut Primogem
      const waktu = state.clock.elapsedTime;
      primoGroup.current.rotation.y = waktu * 0.45;
      primoGroup.current.rotation.x = Math.sin(waktu * 0.3) * 0.15;
      primoGroup.current.rotation.z = Math.cos(waktu * 0.2) * 0.08;
    }

    if (lightRef.current) {
      lightRef.current.intensity = 25 + tZoom * 55;
    }

    // Kamera mengikuti jalur zoom in tepat ke arah Primogem
    const startCam = { x: 0, y: 0.3, z: 8.5 };
    const endCam = { x: 0, y: 0.0, z: -4.8 };

    const desiredCamPos = {
      x: startCam.x + (endCam.x - startCam.x) * tZoom + mouse.current.x * 0.45,
      y: startCam.y + (endCam.y - startCam.y) * tZoom + mouse.current.y * 0.3 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04,
      z: startCam.z + (endCam.z - startCam.z) * tZoom,
    };

    const desiredTarget = {
      x: mouse.current.x * 0.15,
      y: mouse.current.y * 0.1,
      z: primoZ,
    };

    // Exponential smoothing (damping) seperti di portofolio
    const k = 1 - Math.exp(-4.2 * delta);
    const c = cur.current;

    c.pos.set(
      c.pos.x + (desiredCamPos.x - c.pos.x) * k,
      c.pos.y + (desiredCamPos.y - c.pos.y) * k,
      c.pos.z + (desiredCamPos.z - c.pos.z) * k
    );

    c.tgt.set(
      c.tgt.x + (desiredTarget.x - c.tgt.x) * k,
      c.tgt.y + (desiredTarget.y - c.tgt.y) * k,
      c.tgt.z + (desiredTarget.z - c.tgt.z) * k
    );

    camera.position.copy(c.pos);
    camera.lookAt(c.tgt);
  });

  return (
    <group ref={group}>
      <group ref={primoGroup}>
        <Primogem3D />
        <PrimogemHalo />
        <pointLight ref={lightRef} color="#45d0ff" distance={30} decay={2} intensity={35} />
      </group>
      {children}
    </group>
  );
}

export default function GachaScene({ progres }: { progres: Progres }) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 8.5], fov: 46, near: 0.1, far: 180 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[8, 12, 10]} intensity={2.2} color="#e6f7ff" />
      <directionalLight position={[-8, -8, -10]} intensity={1.5} color="#0088ff" />
      <CosmicStarfield />
      <ImmersiveRig progres={progres}>
        <WarpSpeedDust count={750} />
      </ImmersiveRig>
    </Canvas>
  );
}

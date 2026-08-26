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
function CosmicStarfield({ count = 1000 }: { count?: number }) {
  const { positions, colors } = useMemo(() => {
    const acak = buatAcak(777);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const theta = acak() * Math.PI * 2;
      const phi = Math.acos(2 * acak() - 1);
      const r = 25 + acak() * 95;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const palet = acak();
      if (palet < 0.45) {
        c.set("#72dbf8"); // Cyan / Primogem blue
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
        size={0.14}
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

// 2. Debu Kecepatan & Partikel Bintang di Sekeliling Kamera (Warp Speed Dust)
function WarpSpeedDust({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Group>(null);
  const { camera } = useThree();

  const positions = useMemo(() => {
    const acak = buatAcak(333);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 0.8 + Math.sqrt(acak()) * 7.0;
      const angle = acak() * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = 12 - acak() * 40;
    }
    return arr;
  }, [count]);

  const tailScale = useMemo(() => {
    const acak = buatAcak(555);
    return Float32Array.from({ length: count }, () => 0.5 + acak() * 0.9);
  }, [count]);

  const linePositions = useMemo(() => new Float32Array(count * 2 * 3), [count]);
  const sim = useRef<{ prev: THREE.Vector3 | null; vel: number }>({
    prev: null,
    vel: 0,
  });

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.03;
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

    const v = Math.max(0, s.vel - 0.2);
    const len = Math.min(2.8, v * 0.15);
    const lineMesh = ref.current?.children?.[1] as THREE.LineSegments | undefined;
    const mat = lineMesh?.material as THREE.LineBasicMaterial | undefined;
    if (mat) {
      mat.opacity = Math.min(0.65, v * 0.07);
    }

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
          size={0.06}
          color="#9ee7ff"
          transparent
          opacity={0.65}
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

// 3. Inti Halo Bersinar di sekitar Primogem
function PrimogemHalo() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const s = 0.85 + Math.sin(t * 2.0) * 0.05;
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.9, 32, 32]} />
      <meshBasicMaterial
        color="#00d2ff"
        transparent
        opacity={0.08}
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
    pos: new THREE.Vector3(0, 0.4, 9.5),
    tgt: new THREE.Vector3(0, 0.4, 0),
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
    const tZoom = smoothstep(Math.min(1, Math.max(0, rawProgress / 1.35)));

    // Primogem diposisikan sedikit di atas tengah (Y=0.55) agar proporsional dan tidak menutupi teks CTA di bawah
    const primoY = 0.55 + tZoom * 0.35;
    const primoZ = -6.5 * tZoom;
    const primoScale = 1.0 + tZoom * 0.85;

    if (primoGroup.current) {
      primoGroup.current.position.set(0, primoY, primoZ);
      primoGroup.current.scale.set(primoScale, primoScale, primoScale);

      const waktu = state.clock.elapsedTime;
      primoGroup.current.rotation.y = waktu * 0.4;
      primoGroup.current.rotation.x = Math.sin(waktu * 0.3) * 0.12;
      primoGroup.current.rotation.z = Math.cos(waktu * 0.2) * 0.06;
    }

    if (lightRef.current) {
      lightRef.current.intensity = 18 + tZoom * 35;
    }

    // Kamera meluncur masuk mengikuti Primogem
    const startCam = { x: 0, y: 0.55, z: 9.5 };
    const endCam = { x: 0, y: primoY, z: -3.5 };

    const desiredCamPos = {
      x: startCam.x + (endCam.x - startCam.x) * tZoom + mouse.current.x * 0.4,
      y: startCam.y + (endCam.y - startCam.y) * tZoom + mouse.current.y * 0.25 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03,
      z: startCam.z + (endCam.z - startCam.z) * tZoom,
    };

    const desiredTarget = {
      x: mouse.current.x * 0.12,
      y: primoY,
      z: primoZ,
    };

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
        <pointLight ref={lightRef} color="#45d0ff" distance={25} decay={2} intensity={22} />
      </group>
      {children}
    </group>
  );
}

export default function GachaScene({ progres }: { progres: Progres }) {
  return (
    <Canvas
      camera={{ position: [0, 0.55, 9.5], fov: 45, near: 0.1, far: 180 }}
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
      <ambientLight intensity={0.75} />
      <directionalLight position={[8, 12, 10]} intensity={2.0} color="#e6f7ff" />
      <directionalLight position={[-8, -8, -10]} intensity={1.2} color="#0088ff" />
      <CosmicStarfield />
      <ImmersiveRig progres={progres}>
        <WarpSpeedDust count={650} />
      </ImmersiveRig>
    </Canvas>
  );
}

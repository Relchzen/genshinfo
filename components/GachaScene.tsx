"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Primogem3D, PrimogemRef } from "./PrimogemModel";

type Progres = { current: number };

const smoothstep = (t: number) => t * t * (3 - 2 * t);

function buatAcak(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// Generator tekstur lingkaran lembut antialiased untuk bintang & debu luar angkasa
function buatTeksturBulat() {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0.0, "rgba(255, 255, 255, 1.0)");
  grad.addColorStop(0.28, "rgba(255, 255, 255, 0.75)");
  grad.addColorStop(0.65, "rgba(255, 255, 255, 0.18)");
  grad.addColorStop(1.0, "rgba(255, 255, 255, 0.0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

// 1. Ladang Bintang Semesta (Cosmic Starfield)
function CosmicStarfield({ count = 500 }: { count?: number }) {
  const tex = useMemo(() => buatTeksturBulat(), []);

  const { positions, colors } = useMemo(() => {
    const acak = buatAcak(777);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const theta = acak() * Math.PI * 2;
      const phi = Math.acos(2 * acak() - 1);
      const r = 25 + acak() * 110;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const palet = acak();
      if (palet < 0.45) {
        c.set("#72dbf8"); // Cyan
      } else if (palet < 0.75) {
        c.set("#f59e0b"); // Emas
      } else if (palet < 0.9) {
        c.set("#c084fc"); // Ungu
      } else {
        c.set("#ffffff"); // Putih
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
        map={tex ?? undefined}
        size={0.16}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 2. Warp Speed Dust di sekeliling kamera
function WarpSpeedDust({ count = 550 }: { count?: number }) {
  const ref = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const tex = useMemo(() => buatTeksturBulat(), []);

  const positions = useMemo(() => {
    const acak = buatAcak(333);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.0 + Math.sqrt(acak()) * 7.5;
      const angle = acak() * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = 12 - acak() * 52;
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
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.02;
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
    const len = Math.min(3.2, v * 0.16);
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
          map={tex ?? undefined}
          size={0.085}
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

// 3. Efek Halo Berlapis & Pulse Rings (Cincin kosmik melingkari Primogem dengan denyut gelombang keluar)
function LayeredHaloAndPulse({ tZoom }: { tZoom: number }) {
  const pulse1 = useRef<THREE.Mesh>(null);
  const pulse2 = useRef<THREE.Mesh>(null);
  const ringInner = useRef<THREE.Mesh>(null);
  const ringOuter = useRef<THREE.Mesh>(null);

  const matPulse1 = useRef<THREE.MeshBasicMaterial>(null);
  const matPulse2 = useRef<THREE.MeshBasicMaterial>(null);
  const matInner = useRef<THREE.MeshBasicMaterial>(null);
  const matOuter = useRef<THREE.MeshBasicMaterial>(null);

  const cCyan = useMemo(() => new THREE.Color("#38bdf8"), []);
  const cGold = useMemo(() => new THREE.Color("#fbbf24"), []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Warna bertransisi dari cyan ke emas sesuai scroll
    const curColor = new THREE.Color().lerpColors(cCyan, cGold, tZoom);

    // Rotasi cincin halo konsentris
    if (ringInner.current) {
      ringInner.current.rotation.z = time * 0.35;
      const s = 1.0 + Math.sin(time * 2.0) * 0.03;
      ringInner.current.scale.set(s, s, s);
    }
    if (ringOuter.current) {
      ringOuter.current.rotation.z = -time * 0.22;
      const s = 1.0 + Math.cos(time * 1.6) * 0.04;
      ringOuter.current.scale.set(s, s, s);
    }

    if (matInner.current) {
      matInner.current.color.copy(curColor);
      matInner.current.opacity = 0.25 + tZoom * 0.45;
    }
    if (matOuter.current) {
      matOuter.current.color.copy(curColor);
      matOuter.current.opacity = 0.15 + tZoom * 0.35;
    }

    // Pulse Wave 1 (menyebar keluar)
    const phase1 = (time * 0.75) % 1.0;
    if (pulse1.current && matPulse1.current) {
      const s = 0.7 + phase1 * 1.6;
      pulse1.current.scale.set(s, s, s);
      matPulse1.current.color.copy(curColor);
      matPulse1.current.opacity = Math.pow(1 - phase1, 1.8) * (0.2 + tZoom * 0.55);
    }

    // Pulse Wave 2 (terfase 0.5 di belakang)
    const phase2 = (time * 0.75 + 0.5) % 1.0;
    if (pulse2.current && matPulse2.current) {
      const s = 0.7 + phase2 * 1.6;
      pulse2.current.scale.set(s, s, s);
      matPulse2.current.color.copy(curColor);
      matPulse2.current.opacity = Math.pow(1 - phase2, 1.8) * (0.2 + tZoom * 0.55);
    }
  });

  return (
    <group>
      {/* Cincin Halo Dalam */}
      <mesh ref={ringInner}>
        <ringGeometry args={[0.95, 0.98, 64]} />
        <meshBasicMaterial
          ref={matInner}
          color={cCyan}
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Cincin Halo Luar Berpendar */}
      <mesh ref={ringOuter}>
        <ringGeometry args={[1.25, 1.29, 64]} />
        <meshBasicMaterial
          ref={matOuter}
          color={cCyan}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Gelombang Pulsa 1 */}
      <mesh ref={pulse1}>
        <ringGeometry args={[0.9, 0.96, 64]} />
        <meshBasicMaterial
          ref={matPulse1}
          color={cCyan}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Gelombang Pulsa 2 */}
      <mesh ref={pulse2}>
        <ringGeometry args={[0.9, 0.96, 64]} />
        <meshBasicMaterial
          ref={matPulse2}
          color={cCyan}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// 4. Spiral Dot Trail Primogem Emas (HANYA MUNCUL SAAT SCROLL DAN SUDAH BERUBAH MENJADI EMAS)
function PrimogemGoldenDotSpiral({
  primoPos,
  tZoom,
}: {
  primoPos: THREE.Vector3;
  tZoom: number;
}) {
  const count = 140;
  const meshRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);
  const tex = useMemo(() => buatTeksturBulat(), []);

  const spiralData = useMemo(() => {
    const acak = buatAcak(999);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const spiralAngles = new Float32Array(count);
    const spiralRadii = new Float32Array(count);
    const zOffsets = new Float32Array(count);
    const speeds = new Float32Array(count);

    const cGoldLight = new THREE.Color("#fef08a");
    const cGoldAmber = new THREE.Color("#f59e0b");
    const c = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const progress = i / count;
      spiralAngles[i] = progress * Math.PI * 7.5 + acak() * 0.4;
      spiralRadii[i] = 0.12 + Math.pow(progress, 0.7) * 0.85;
      zOffsets[i] = progress * 7.5;
      speeds[i] = 1.3 + acak() * 1.5;

      c.lerpColors(cGoldLight, cGoldAmber, Math.pow(progress, 0.75));
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { pos, col, spiralAngles, spiralRadii, zOffsets, speeds };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current || !matRef.current) return;

    // KETENTUAN: Spiral dot HANYA muncul saat scroll ketika Primogem sudah berubah emas (tZoom > 0.25)
    // Saat masih biru (tZoom < 0.25), spiral tersembunyi total (opacity 0)
    let goldenVisibility = 0;
    if (tZoom > 0.25) {
      goldenVisibility = smoothstep((tZoom - 0.25) / 0.75);
    }

    matRef.current.opacity = goldenVisibility * 0.85;

    if (goldenVisibility <= 0.001) {
      meshRef.current.visible = false;
      return;
    }
    meshRef.current.visible = true;

    const time = state.clock.elapsedTime;
    const { pos, spiralAngles, spiralRadii, zOffsets, speeds } = spiralData;
    const attr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;

    const stretch = 1.0 + tZoom * 5.0;

    for (let i = 0; i < count; i++) {
      const angle = spiralAngles[i] + time * speeds[i] * 0.45;
      const r = spiralRadii[i] * (1.0 + tZoom * 0.4);
      const zDist = (zOffsets[i] / 7.5) * stretch * 7.5;

      pos[i * 3] = primoPos.x + Math.cos(angle) * r;
      pos[i * 3 + 1] = primoPos.y + Math.sin(angle) * r;
      pos[i * 3 + 2] = primoPos.z + zDist + 0.12;
    }
    attr.array.set(pos);
    attr.needsUpdate = true;
  });

  return (
    <points ref={meshRef} frustumCulled={false} visible={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[spiralData.pos, 3]} />
        <bufferAttribute attach="attributes-color" args={[spiralData.col, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        map={tex ?? undefined}
        size={0.08}
        vertexColors
        transparent
        opacity={0}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 5. Rig Kamera & Primogem
function ImmersiveRig({ progres, children }: { progres: Progres; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const primoGroup = useRef<THREE.Group>(null);
  const primoModelRef = useRef<PrimogemRef>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const mouse = useRef(new THREE.Vector2());

  const primoPosState = useRef(new THREE.Vector3(0, 0.55, 0));
  const cur = useRef({
    pos: new THREE.Vector3(0, 0.55, 9.5),
    tgt: new THREE.Vector3(0, 0.55, 0),
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

  const [tZoomState, setTZoomState] = useStateRef(0);

  useFrame((_state, delta) => {
    const rawProgress = progres.current;
    const tZoom = smoothstep(Math.min(1, Math.max(0, rawProgress / 1.35)));
    setTZoomState(tZoom);

    // Kirim transisi warna (Cyan -> Gold) ke model Primogem
    if (primoModelRef.current) {
      primoModelRef.current.setTransition(tZoom);
    }

    // Primogem meluncur menjauh ke kedalaman Z (dari Z=0 ke Z=-16) tanpa rotasi
    const startPrimoZ = 0;
    const endPrimoZ = -16.0;
    const primoZ = startPrimoZ + (endPrimoZ - startPrimoZ) * tZoom;
    const primoY = 0.55 + tZoom * 0.35;

    primoPosState.current.set(0, primoY, primoZ);

    if (primoGroup.current) {
      primoGroup.current.position.set(0, primoY, primoZ);
      primoGroup.current.rotation.set(0, 0, 0);
    }

    // Kamera mengikuti di belakang Primogem
    const startCamZ = 9.5;
    const endCamZ = primoZ + 8.5;

    const desiredCamPos = {
      x: mouse.current.x * 0.3,
      y: primoY + mouse.current.y * 0.18,
      z: startCamZ + (endCamZ - startCamZ) * tZoom,
    };

    const desiredTarget = {
      x: mouse.current.x * 0.08,
      y: primoY,
      z: primoZ,
    };

    if (lightRef.current) {
      const cCyan = new THREE.Color("#38bdf8");
      const cGold = new THREE.Color("#f59e0b");
      lightRef.current.color.lerpColors(cCyan, cGold, tZoom);
      lightRef.current.intensity = 18 + tZoom * 32;
    }

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
        <Primogem3D ref={primoModelRef} />
        <LayeredHaloAndPulse tZoom={tZoomState.current} />
        <pointLight ref={lightRef} color="#38bdf8" distance={22} decay={2} intensity={18} />
      </group>
      <PrimogemGoldenDotSpiral primoPos={primoPosState.current} tZoom={tZoomState.current} />
      {children}
    </group>
  );
}

function useStateRef(initial: number) {
  const ref = useRef(initial);
  const set = (val: number) => {
    ref.current = val;
  };
  return [ref, set] as const;
}

export default function GachaScene({ progres }: { progres: Progres }) {
  return (
    <Canvas
      camera={{ position: [0, 0.55, 9.5], fov: 45, near: 0.1, far: 200 }}
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
      <directionalLight position={[8, 12, 10]} intensity={1.8} color="#e6f7ff" />
      <directionalLight position={[-8, -8, -10]} intensity={1.0} color="#0088ff" />
      <CosmicStarfield />
      <ImmersiveRig progres={progres}>
        <WarpSpeedDust count={550} />
      </ImmersiveRig>
    </Canvas>
  );
}

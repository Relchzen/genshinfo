import * as THREE from "three";
import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

export function Primogem3D(props: any) {
  const { nodes } = useGLTF(
    "/models/primogemmorastardust_from_genshin_impact_free.glb"
  ) as any;

  // Custom physical material untuk Primogem agar berkilau kristal mewah seperti di Genshin Impact
  const customMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#4ac7ff"),
      emissive: new THREE.Color("#185a9d"),
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      flatShading: true,
      side: THREE.DoubleSide,
    });
  }, []);

  // Geometry Primogem di dalam file GLB memiliki dimensi sekitar ~400 unit (bounding box radius ~200)
  // Kita scale ke ukuran unit Three.js yang pas (misal ~0.005 untuk ukuran ~2 unit)
  return (
    <group {...props} dispose={null}>
      {nodes?.Primogem_2_Primo_0 ? (
        <mesh
          geometry={nodes.Primogem_2_Primo_0.geometry}
          material={customMaterial}
          scale={[0.0075, 0.0075, 0.0075]}
        />
      ) : null}
    </group>
  );
}

useGLTF.preload("/models/primogemmorastardust_from_genshin_impact_free.glb");

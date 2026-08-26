import * as THREE from "three";
import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

export function Primogem3D(props: any) {
  const { nodes } = useGLTF(
    "/models/primogemmorastardust_from_genshin_impact_free.glb"
  ) as any;

  // Material kristal fisik untuk Primogem dengan faset tajam dan kilauan khas Teyvat
  const customMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#38bdf8"),
      emissive: new THREE.Color("#0284c7"),
      emissiveIntensity: 0.45,
      roughness: 0.12,
      metalness: 0.15,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      flatShading: true,
      side: THREE.DoubleSide,
    });
  }, []);

  // Skala dasar yang proporsional dan elegan (tidak memenuhi seluruh layar)
  return (
    <group {...props} dispose={null}>
      {nodes?.Primogem_2_Primo_0 ? (
        <mesh
          geometry={nodes.Primogem_2_Primo_0.geometry}
          material={customMaterial}
          scale={[0.0034, 0.0034, 0.0034]}
        />
      ) : null}
    </group>
  );
}

useGLTF.preload("/models/primogemmorastardust_from_genshin_impact_free.glb");

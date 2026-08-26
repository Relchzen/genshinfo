import * as THREE from "three";
import React, { forwardRef, useImperativeHandle, useMemo } from "react";
import { useGLTF } from "@react-three/drei";

export type PrimogemRef = {
  setTransition: (t: number) => void;
};

export const Primogem3D = forwardRef<PrimogemRef, { className?: string }>(
  function Primogem3D(_props, ref) {
    const { nodes } = useGLTF(
      "/models/primogemmorastardust_from_genshin_impact_free.glb"
    ) as any;

    const baseCyan = useMemo(() => new THREE.Color("#38bdf8"), []);
    const goldAccent = useMemo(() => new THREE.Color("#fbbf24"), []);
    const emissiveCyan = useMemo(() => new THREE.Color("#0284c7"), []);
    const emissiveGold = useMemo(() => new THREE.Color("#d97706"), []);

    // Material kristal fisik yang responsif terhadap transisi scroll
    const material = useMemo(() => {
      return new THREE.MeshPhysicalMaterial({
        color: baseCyan.clone(),
        emissive: emissiveCyan.clone(),
        emissiveIntensity: 0.55,
        roughness: 0.12,
        metalness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        flatShading: true,
        side: THREE.DoubleSide,
      });
    }, [baseCyan, emissiveCyan]);

    useImperativeHandle(ref, () => ({
      setTransition: (t: number) => {
        // Interpolasi warna dari cyan murni ke aksen emas berkilau saat scroll
        material.color.lerpColors(baseCyan, goldAccent, t);
        material.emissive.lerpColors(emissiveCyan, emissiveGold, t);
        material.emissiveIntensity = 0.55 + t * 0.45;
        material.metalness = 0.2 + t * 0.25;
      },
    }));

    return (
      <group dispose={null}>
        {nodes?.Primogem_2_Primo_0 ? (
          <mesh
            geometry={nodes.Primogem_2_Primo_0.geometry}
            material={material}
            scale={[0.0034, 0.0034, 0.0034]}
            rotation={[0, 0, 0]}
          />
        ) : null}
      </group>
    );
  }
);

useGLTF.preload("/models/primogemmorastardust_from_genshin_impact_free.glb");

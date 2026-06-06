"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 2]} />
      <meshStandardMaterial
        color="#0ea5e9"
        emissive="#38bdf8"
        emissiveIntensity={0.4}
        roughness={0.25}
        metalness={0.6}
        wireframe
      />
    </mesh>
  );
}

export function CloudOrb() {
  return (
    <div className="relative h-[320px] w-full rounded-3xl border border-cyan-400/20 bg-white/5 shadow-[0_25px_80px_rgba(12,24,44,0.45)] backdrop-blur-2xl md:h-[420px]">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 6]} intensity={1.2} />
        <Orb />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_60%)]" />
    </div>
  );
}

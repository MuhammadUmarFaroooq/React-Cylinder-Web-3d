import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
function Scene() {
  let text = useTexture("./cyl.png");
  text.needsUpdate = true;
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.4]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
        <meshStandardMaterial transparent map={text} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Scene;

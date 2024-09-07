import { Canvas } from "@react-three/fiber";
import React from "react";
import "./styles.css";
import { OrbitControls } from "@react-three/drei";

import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

function App() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <h1 className="text-white font-mono font-bold text-4xl">
          Welcome to Car Zone
        </h1>
      </div>
      <Canvas camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={4.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;

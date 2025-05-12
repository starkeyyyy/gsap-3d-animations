import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import React, { useRef, useState } from "react";

import "./styles/profile.css";
import { Room } from "../assets/Roomenv.jsx";
import SceneText from "./text.jsx";

const Scene = () => {
  const [camera, setCamera] = useState([-4, 2, 4]);

  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
    mouse.current.y = (event.clientY / innerHeight) * 2 - 1;
  };

  return (
    <div className="main-container">
      <div className="hide"></div>
      <div className="hide"></div>
      <div className="hide"></div>
      <div className="hide"></div>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        onMouseMove={handleMouseMove}
        camera={{ position: [...camera], fov: 50 }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[-4, 2, 4]} intensity={5} />
        <ScrollControls pages={8} damping={0.25} className="scroll-container">
          <Room mouse={mouse.current} camera={camera} />
          <SceneText />
        </ScrollControls>
      </Canvas>

      <div style={{ position: "absolute", zIndex: 3, top: "0" }}></div>
    </div>
  );
};

export default Scene;


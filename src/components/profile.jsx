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

// import { Canvas, useFrame } from '@react-three/fiber'
// import React, { useRef } from 'react'
// import * as THREE from 'three'
// import "./profile.css"
// import { Model } from '../assets/walle.jsx'

// // function FollowCube({ mouse }) {
// //   const cubeRef = useRef()

// //   // useFrame(() => {
// //   //   if (cubeRef.current) {
// //   //     const maxTilt = THREE.MathUtils.degToRad(30) // 15 degree tilt limit

// //   //     // Calculate desired rotation based on mouse
// //   //     const targetRotX = THREE.MathUtils.clamp(mouse.y * maxTilt, -maxTilt, maxTilt)
// //   //     const targetRotY = THREE.MathUtils.clamp(mouse.x * maxTilt, -maxTilt, maxTilt)

// //   //     // Smooth Rotation
// //   //     cubeRef.current.rotation.x = THREE.MathUtils.lerp(
// //   //       cubeRef.current.rotation.x,
// //   //       targetRotX,
// //   //       0.1
// //   //     )
// //   //     cubeRef.current.rotation.y = THREE.MathUtils.lerp(
// //   //       cubeRef.current.rotation.y,
// //   //       targetRotY,
// //   //       0.1
// //   //     )
// //   //   }
// //   // })

// //   return (
// //     <mesh ref={cubeRef} position={[0, 0, 0]}>
// //       <boxGeometry args={[1, 1, 1]} />
// //       {/* Always pink front face */}
// //       {Array(6).fill().map((_, idx) => (
// //         <meshStandardMaterial
// //           attach={`material-${idx}`}
// //           key={idx}
// //           color={idx === 4 ? 'hotpink' : 'orange'} // 4 => Front Face
// //         />
// //       ))}
// //     </mesh>
// //   )
// // }

// export default function App() {
//   const mouse = useRef({ x: 0, y: 0 })

//   const handleMouseMove = (event) => {
//     const { innerWidth, innerHeight } = window
//     mouse.current.x = (event.clientX / innerWidth) * 2 - 1
//     mouse.current.y = ((event.clientY / innerHeight) * 2 - 1)
//   }

//   return (
//     <Canvas onMouseMove={handleMouseMove}>
//       <ambientLight />
//       <directionalLight position={[5, 5, 5]} />
//       {/* <FollowCube mouse={mouse.current} /> */}
//       <Model mouse = {mouse.current}/>
//     </Canvas>
//   )
// }

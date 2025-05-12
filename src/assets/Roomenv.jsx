import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

export function Room({ mouse, ...props }) {
  // inside room refs
  const stoolRef = useRef();
  const wallRef = useRef();
  const boardRef = useRef();
  const tableRef = useRef();
  const playbuttonRef = useRef();
  const carpet = useRef();
  const box = useRef();
  const bigUi = useRef();
  const bigCdui = useRef();
  const tableRef2 = useRef();
  const videoRef = useRef();
  const plantRef = useRef();
  const danceFrameRef = useRef();
  const starPhotoRef = useRef();
  const emptyFrameRef = useRef();
  const lampRef = useRef();
  const guitarRef = useRef();
  const sliderRef = useRef();

  const scrollY = useScroll();
  const { camera } = useThree();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scrollY?.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
     
  //zooming into the scene
      tl.current.to(roomRef.current.position, {
        x: -3.5,
        y:1,
        z: 4,
        duration: 3,
        ease: "power2.inOut"
      })
      .to(roomRef.current.rotation , {
        y: THREE.MathUtils.degToRad(45),
        duration: 3,
        ease: "power2.inOut"

      } , "<");
//zooming into the table contents like paper and headphones
      tl.current.to(roomRef.current.position, {
        x: -3.8,
        z: 3.3,
        y: .7,
        duration:3,
        ease:"power2.inOut"
      })
      .to(roomRef.current.rotation, {
        z: THREE.MathUtils.degToRad(80),
        duration:3,
        ease: "power2.inOut"
      },"<")
//zooming out towards the laptop
      tl.current.to(roomRef.current.rotation, {
        z: THREE.MathUtils.degToRad(0),
        y: THREE.MathUtils.degToRad(-10),
        duration:3, 
        ease: "power2.inOut"

      })
      .to(roomRef.current.position, {
        x:-4.5,
        z:4.5,
        y: 1.3,
        duration:3,
        ease: "power2.inOut"
      }, "<")
      .to(roomRef.current.rotation, {
        z:THREE.MathUtils.degToRad(-5),
        y: THREE.MathUtils.degToRad(45),
        duration: 3,
        ease: "power2.inOut"

      })
      .to(roomRef.current.position, {
        x:-4,
        y: .4,
        z: 4,
        duration: 3,
        ease: "power2.inOut"
      },"<")

      .to(roomRef.current.position, {
        y:.7,
        duration: 3,
        ease: "power2.inOut"
      })
      .to(roomRef.current.rotation, {
        x:THREE.MathUtils.degToRad(60),
        z:THREE.MathUtils.degToRad(10),

        duration: 3,
        ease: "power2.inOut"

      },"<")
      .to(roomRef.current.position,{
        x:-2.5,
        y:1.7,
        z:4,
        duration:3,
        ease: "power2.inOut"
      })

      .to(roomRef.current.rotation, {
        x:0,
        y:0,
        z:0,
        duration: 3,
        ease: "power2.inOut"

      },"<")

      .to(roomRef.current.position, {
       y:.25,
       z:5.2,
       x:-3.7,
       duration: 3,
        ease: "power2.inOut"

      })

      .to(roomRef.current.rotation, {
        y:THREE.MathUtils.degToRad(-45),
        duration: 3,
        ease: "power2.inOut"
      },"<")

      
  
      

      
    });
  
    return () => ctx.revert(); // clean up
  }, []);


  useEffect(() => {
    // Animate stool
    gsap.from(stoolRef.current.rotation, {
      z: THREE.MathUtils.degToRad(90),
      ease: "power2.out",
      duration: 2,
      delay: .5
    });

    gsap.from(wallRef.current?.rotation, {
      z: 1,
      ease: "power2.out",
      duration: 2
    })
  

    // Animate board
    gsap.from(boardRef.current?.position, {
      x: 1,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
    gsap.from(boardRef.current?.rotation, {
      y: THREE.MathUtils.degToRad(90),
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate carpet
    gsap.from(carpet.current?.position, {
      y: -5,
      ease: "power2.out",
      duration: 2,
      delay : .5
    });
  
    // Animate box
    gsap.from(box.current?.position, {
      z: -5,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate bigUi
    gsap.from(bigUi.current?.rotation, {
      x: THREE.MathUtils.degToRad(-90),
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate bigCdui
    gsap.from(bigCdui.current?.position, {
      y: 3,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate tableRef2
    gsap.from(tableRef2.current?.position, {
      x: -3,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate videoRef
    gsap.from(videoRef.current?.rotation, {
      y: THREE.MathUtils.degToRad(180),
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate plantRef
    gsap.from(plantRef.current?.position, {
      z: 2,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate danceFrameRef
    gsap.from(danceFrameRef.current?.rotation, {
      z: THREE.MathUtils.degToRad(90),
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate starPhotoRef
    gsap.from(starPhotoRef.current?.position, {
      y: -3,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate emptyFrameRef
    gsap.from(emptyFrameRef.current?.rotation, {
      x: THREE.MathUtils.degToRad(90),
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate lampRef
    gsap.from(lampRef.current?.position, {
      z: 2,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate guitarRef
    gsap.from(guitarRef.current?.rotation, {
      y: THREE.MathUtils.degToRad(180),
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
  
    // Animate sliderRef
    gsap.from(sliderRef.current?.position, {
      x: 3,
      ease: "power2.out",
      duration: 2,
      delay: .5
    });
    gsap.from(tableRef.current?.rotation, {
      z: THREE.MathUtils.degToRad(90),
      ease: "power2.out",
      duration: 2,
      delay: .5

    })
  }, []);
  

  const roomRef = useRef();
  const { nodes, materials } = useGLTF("./models/Room.glb");

  useEffect(() => {
    Object.values(materials).filter((material) => material.name !== "Material.002").forEach((material) => {
      material.transparent = true;
      material.opacity = 0;
      material.needsUpdate = true;

      gsap.to(material, {
        opacity: 1,
        duration: 2,
        delay: .5
      })
    });

    
  }, []);
  
  return (
    <group
      {...props}
      dispose={null}
      position={[0, -.2, 0]}
      rotation={[0, 0, 0]}
      scale={.2}
      ref={roomRef}
      style={{
        pointerEvents: "none",
        outerWidth: "100vw",
        outerHeight: "100vh",
        zIndex: 1,
      }}
    >
      <group name="Node_0" scale={0.01}>
        <group name="Objects" position={[52.271, 362.211, -20.871]}>
          <group
            ref = {bigCdui}
            name="bg-cd-ui"
            position={[669.59, 132.724, 342.133]}
            rotation={[-3.14, Math.PI / 2, 0]}
            scale={-1}
          >
            <mesh
              name="Cylinder008"
              geometry={nodes.Cylinder008.geometry}
              material={nodes.Cylinder008.material}
              position={[93.009, 10.857, 5.557]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.68}
            />
            <mesh
              name="Rectangle_5002"
              geometry={nodes.Rectangle_5002.geometry}
              material={materials["Material.005"]}
              position={[70.759, 8.845, -8.279]}
              scale={0.68}
            />
            <mesh
              name="Torus001"
              geometry={nodes.Torus001.geometry}
              material={nodes.Torus001.material}
              position={[88.068, 7.966, 8.232]}
              rotation={[0, 0, 0.002]}
            />
          </group>
          <group
            ref = {boardRef}
            name="bg-ui"
            position={[753.378, 263.162, -30.437]}
            rotation={[0, -1.571, 0]}
            scale={0.656}
          >
            <mesh
              name="Cylinder_2006"
              geometry={nodes.Cylinder_2006.geometry}
              material={nodes.Cylinder_2006.material}
              position={[-458.729, 386.276, 14.384]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.41}
            />
            <mesh
              name="Cylinder_3002"
              geometry={nodes.Cylinder_3002.geometry}
              material={nodes.Cylinder_3002.material}
              position={[-352.58, 386.276, 14.384]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.41}
            />
            <mesh
              name="Cylinder009"
              geometry={nodes.Cylinder009.geometry}
              material={nodes.Cylinder009.material}
              position={[-568.406, 386.276, 14.384]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.41}
            />
            <mesh
              name="Ellipse_2005"
              geometry={nodes.Ellipse_2005.geometry}
              material={materials["Material.018"]}
              position={[277.583, -45.105, 37.488]}
              scale={1.524}
            />
            <mesh
              name="Rectangle_2008"
              geometry={nodes.Rectangle_2008.geometry}
              material={materials["Material.017"]}
              position={[0, 0, -23.619]}
            />
            <mesh
              name="Rectangle_3007"
              geometry={nodes.Rectangle_3007.geometry}
              material={materials["Material.001"]}
              position={[0, -44.003, 5.662]}
            />
            <mesh
              name="Rectangle_5006"
              geometry={nodes.Rectangle_5006.geometry}
              material={materials["Material.005"]}
              position={[-288.86, 175.223, 33.087]}
            />
            <mesh
              name="Rectangle_6006"
              geometry={nodes.Rectangle_6006.geometry}
              material={materials["Material.004"]}
              position={[-288.86, -134.399, 33.087]}
            />
          </group>
          <group name="books-1" position={[750.168, -126.854, -719.477]}>
            <mesh
              name="book-1"
              geometry={nodes["book-1"].geometry}
              material={materials["Material.005"]}
              position={[-42.13, -51.791, -35.072]}
              rotation={[-Math.PI / 2, -1.396, -Math.PI / 2]}
            />
            <mesh
              name="book-2"
              geometry={nodes["book-2"].geometry}
              material={materials["Material.011"]}
              position={[70.6, 0.508, 0]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="book-3"
              geometry={nodes["book-3"].geometry}
              material={nodes["book-3"].material}
              position={[45.701, -33.992, -18.418]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="book-4"
              geometry={nodes["book-4"].geometry}
              material={materials["Material.004"]}
              position={[5.734, -27.492, -18.418]}
              rotation={[-Math.PI / 2, -1.484, -Math.PI / 2]}
            />
          </group>
          <group
            name="books-2"
            position={[496.053, -235.394, -189.069]}
            scale={[1.008, 0.872, 1.008]}
          >
            <group
              name="book-5"
              position={[-4.931, 2.293, -71.098]}
              rotation={[-0.024, -0.164, -1.574]}
              scale={[0.74, 1.346, 1.232]}
            >
              <mesh
                name="Cube_4"
                geometry={nodes.Cube_4.geometry}
                material={nodes.Cube_4.material}
                position={[-0.321, 0.865, 0.42]}
                rotation={[0.002, 0.001, 0]}
                scale={[0.994, 1.008, 0.998]}
              />
              <mesh
                name="Cube_4001"
                geometry={nodes.Cube_4001.geometry}
                material={materials["Material.027"]}
                position={[-16.676, -0.273, 9.748]}
                rotation={[0.002, 0.001, 0]}
                scale={[0.994, 1.008, 0.998]}
              />
              <mesh
                name="Rectangle"
                geometry={nodes.Rectangle.geometry}
                material={nodes.Rectangle.material}
                position={[-22.698, 32.77, 1.793]}
                rotation={[0, -1.571, 0]}
              />
            </group>
            <mesh
              name="paper"
              geometry={nodes.paper.geometry}
              material={materials["Material.029"]}
              position={[121.276, 13.315, 107.056]}
              rotation={[-1.528, 0.007, -2.125]}
              scale={[1, 0.49, 1]}
            />
            <mesh
              name="paper_2"
              geometry={nodes.paper_2.geometry}
              material={materials["Material.028"]}
              position={[-21.383, -15.182, 12.289]}
              rotation={[-Math.PI / 2, 0, -1.309]}
            />
          </group>
          <group
            ref = {box}
            name="box"
            position={[-650.293, -551.734, -670.097]}
            rotation={[Math.PI, -Math.PI / 9, Math.PI]}
            scale={2.255}
          >
            <mesh
              name="Cube_2004"
              geometry={nodes.Cube_2004.geometry}
              material={nodes.Cube_2004.material}
              position={[-0.693, 56.092, -1.405]}
              scale={0.744}
            />
            <mesh
              name="Cube006"
              geometry={nodes.Cube006.geometry}
              material={materials["Material.011"]}
              position={[-0.693, -0.527, -1.405]}
              scale={0.776}
            />
            <mesh
              name="Rectangle_9001"
              geometry={nodes.Rectangle_9001.geometry}
              material={materials["Material.004"]}
              position={[57.269, -20.819, 18.716]}
              rotation={[0, 1.571, 0]}
            />
          </group>
          <group
            name="box_2"
            position={[547.087, -552.185, -478.177]}
            rotation={[0, -1.484, 0]}
            scale={[2.255, 2.262, 2.262]}
          >
            <mesh
              name="Cube005"
              geometry={nodes.Cube005.geometry}
              material={materials["Material.011"]}
              position={[-0.693, -0.527, -1.405]}
              scale={0.776}
            />
            <mesh
              name="Rectangle_9"
              geometry={nodes.Rectangle_9.geometry}
              material={materials["Material.005"]}
              position={[57.595, -29.149, -11.996]}
              rotation={[0, 1.571, 0]}
            />
          </group>
          <group name="button-ui" ref = {sliderRef} position={[768.378, 351.735, 502.39]}>
            <mesh
              name="Ellipse_3002"
              geometry={nodes.Ellipse_3002.geometry}
              material={materials["Material.007"]}
              position={[-6.987, 63.6, 1.445]}
              rotation={[0, -1.571, 0]}
              scale={0.589}
            />
            <mesh
              name="Rectangle_5005"
              geometry={nodes.Rectangle_5005.geometry}
              material={materials["Material.001"]}
              position={[9.477, -26, 0]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_6005"
              geometry={nodes.Rectangle_6005.geometry}
              material={nodes.Rectangle_6005.material}
              position={[-7.072, -31, 0]}
              rotation={[0, -1.571, 0]}
            />
          </group>
          <group
            ref = {carpet}
            name="carpet_"
            position={[-256.112, -681.266, 145.269]}
            scale={0.955}
          >
            <mesh
              name="Ellipse_2006"
              geometry={nodes.Ellipse_2006.geometry}
              material={materials["Material.024"]}
              position={[0, 7.389, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.086, 1.086, 1.661]}
            />
            <mesh
              name="Ellipse_3003"
              geometry={nodes.Ellipse_3003.geometry}
              material={materials["Material.023"]}
              position={[0, 10.555, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.086, 1.086, 1.661]}
            />
            <mesh
              name="Ellipse001"
              geometry={nodes.Ellipse001.geometry}
              material={materials["Material.023"]}
              position={[0, -7.389, 0]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.086, 1.086, 1.661]}
            />
          </group>
          <group name="cd-1" position={[206.325, -660.627, 519.843]}>
            <mesh
              name="Cube002"
              geometry={nodes.Cube002.geometry}
              material={materials["Material.011"]}
              position={[-0.217, 2.242, -58.31]}
              rotation={[-1.529, -0.026, -0.956]}
            />
            <mesh
              name="Cylinder003"
              geometry={nodes.Cylinder003.geometry}
              material={materials["Material.003"]}
              position={[4.429, -13.81, 62.481]}
              rotation={[0.009, -0.954, 0.002]}
              scale={[0.718, 0.095, 0.718]}
            />
            <mesh
              name="Rectangle_2002"
              geometry={nodes.Rectangle_2002.geometry}
              material={materials["Material.011"]}
              position={[10.881, 12.469, -66.44]}
              rotation={[-1.529, -0.026, -0.956]}
            />
            <mesh
              name="Rectangle_3001"
              geometry={nodes.Rectangle_3001.geometry}
              material={materials["Material.005"]}
              position={[-33.298, 13.683, -35.199]}
              rotation={[-1.529, -0.026, -0.956]}
            />
            <mesh
              name="Rectangle001"
              geometry={nodes.Rectangle001.geometry}
              material={materials["Material.032"]}
              position={[-0.953, 9.154, -58.098]}
              rotation={[-1.529, -0.026, -0.956]}
            />
            <mesh
              name="红色001"
              geometry={nodes.红色001.geometry}
              material={nodes.红色001.material}
              position={[4.429, -13.81, 62.481]}
              rotation={[0.009, -0.954, 0.002]}
              scale={[0.718, 0.095, 0.718]}
            />
          </group>
          <group name="cd-2" position={[637.143, -589.389, 708.33]}>
            <group name="Group_19" position={[6.888, 10.695, 22.417]}>
              <mesh
                name="Cube_2003"
                geometry={nodes.Cube_2003.geometry}
                material={materials["Material.011"]}
                rotation={[-0.59, -0.184, -0.159]}
                scale={0.768}
              />
              <mesh
                name="Ellipse_2001"
                geometry={nodes.Ellipse_2001.geometry}
                material={materials["Material.005"]}
                position={[-3.291, 7.183, 12.665]}
                rotation={[-0.59, -0.184, -1.73]}
                scale={0.768}
              />
            </group>
            <mesh
              name="Cube_2002"
              geometry={nodes.Cube_2002.geometry}
              material={materials["Material.005"]}
              position={[-1.648, -21.839, -37.694]}
              rotation={[-0.087, -Math.PI / 2, 0]}
            />
            <mesh
              name="Cube_3001"
              geometry={nodes.Cube_3001.geometry}
              material={nodes.Cube_3001.material}
              position={[19.059, -84.982, 74.492]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials["Material.011"]}
              position={[-8.363, -3.839, -108.492]}
              rotation={[0, -1.571, 0]}
            />
          </group>
          <group name="cd-3" position={[551.89, -241.789, 262.583]}>
            <group
              name="Group_13"
              position={[32.491, -9.103, -33.06]}
              rotation={[0, -0.175, 0]}
            >
              <mesh
                name="Ellipse_2003"
                geometry={nodes.Ellipse_2003.geometry}
                material={nodes.Ellipse_2003.material}
                position={[0.763, 7.99, -24.919]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name="Ellipse_3001"
                geometry={nodes.Ellipse_3001.geometry}
                material={nodes.Ellipse_3001.material}
                position={[0.763, 7.99, 25.676]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name="Rectangle_2004"
                geometry={nodes.Rectangle_2004.geometry}
                material={materials["Material.002"]}
                position={[10.5, 5.776, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.943, 1, 1]}
              />
              <mesh
                name="Rectangle_3003"
                geometry={nodes.Rectangle_3003.geometry}
                material={materials["Material.026"]}
                position={[1.23, 7.164, 0.5]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name="Rectangle003"
                geometry={nodes.Rectangle003.geometry}
                material={materials["Material.026"]}
                position={[0, -5.234, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.943, 1, 1]}
              />
            </group>
            <group
              name="Group_16"
              position={[-24.943, 0, 29.887]}
              rotation={[0.011, 0.264, 0.195]}
            >
              <mesh
                name="Ellipse_2002"
                geometry={nodes.Ellipse_2002.geometry}
                material={nodes.Ellipse_2002.material}
                position={[1.174, 7.277, -24.941]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name="Ellipse_3"
                geometry={nodes.Ellipse_3.geometry}
                material={nodes.Ellipse_3.material}
                position={[1.174, 7.277, 25.654]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name="Rectangle_3002"
                geometry={nodes.Rectangle_3002.geometry}
                material={materials["Material.026"]}
                position={[1.505, 6.494, 0.485]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              />
              <mesh
                name="Rectangle_2003"
                geometry={nodes.Rectangle_2003.geometry}
                material={materials["Material.014"]}
                position={[10.61, 5.366, -0.006]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.943, 1, 1]}
              />
              <mesh
                name="Rectangle002"
                geometry={nodes.Rectangle002.geometry}
                material={materials["Material.011"]}
                position={[0, -5.234, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.943, 1, 1]}
              />
            </group>
          </group>
          <group
            name="cd-4"
            position={[607.171, -347.275, 688.921]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.781}
          >
            <mesh
              name="Cube003"
              geometry={nodes.Cube003.geometry}
              material={materials["Material.003"]}
              position={[46.203, -124.611, 7.271]}
              rotation={[0, 0, -1.745]}
              scale={1.28}
            />
            <mesh
              name="Cylinder_2001"
              geometry={nodes.Cylinder_2001.geometry}
              material={materials["Material.003"]}
              position={[-89.134, -155.169, 5.275]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={1.28}
            />
            <mesh
              name="Cylinder001"
              geometry={nodes.Cylinder001.geometry}
              material={materials["Material.003"]}
              position={[86.557, -127.473, 7.093]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={1.28}
            />
            <mesh
              name="Cylinder002"
              geometry={nodes.Cylinder002.geometry}
              material={materials["Material.003"]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.718, 0.095, 0.718]}
            />
            <mesh
              name="Rectangle_2001"
              geometry={nodes.Rectangle_2001.geometry}
              material={materials["Material.005"]}
              position={[4.535, -22.14, -42.458]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={1.28}
            />
            <mesh
              name="红色"
              geometry={nodes.红色.geometry}
              material={materials["Material.014"]}
              rotation={[-1.938, -1.513, 2.724]}
              scale={[0.718, 0.095, 0.718]}
            />
          </group>
          <group
            name="cd-5"
            position={[538.66, 77.439, -839.836]}
            scale={[0.718, 0.718, 0.335]}
          >
            <mesh
              name="Cylinder006"
              geometry={nodes.Cylinder006.geometry}
              material={materials["Material.010"]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1, 0.283, 1]}
            />
            <mesh
              name="红色002"
              geometry={nodes.红色002.geometry}
              material={materials["Material.014"]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1, 0.283, 1]}
            />
          </group>
          <group
            name="cd-6"
            position={[538.66, 473.743, -839.836]}
            scale={[1, 1, 0.467]}
          >
            <mesh
              name="Cylinder007"
              geometry={nodes.Cylinder007.geometry}
              material={materials["Material.009"]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1, 0.283, 1]}
            />
            <mesh
              name="红色003"
              geometry={nodes.红色003.geometry}
              material={materials["Material.013"]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1, 0.283, 1]}
            />
          </group>
          <group
            name="chair_2"
            ref={stoolRef}
            position={[-144.026, -505.166, 342.19]}
            rotation={[0, -Math.PI / 6, 0]}
            scale={1.385}
          >
            <mesh
              name="Cube_9001"
              geometry={nodes.Cube_9001.geometry}
              material={materials["Material.004"]}
              position={[-2.31, 99.849, -2.38]}
              rotation={[Math.PI / 2, 0, Math.PI / 4]}
            />
          </group>
          <group
            name="computer"
            position={[514.191, -201.854, -504.863]}
            rotation={[0, -0.671, 0]}
          >
            <group
              name="Group"
              position={[-1.327, 89.681, -11.155]}
              rotation={[0, 0.671, 0]}
            >
              <mesh
                name="Cube_7"
                geometry={nodes.Cube_7.geometry}
                material={materials["Material.010"]}
                position={[-58.971, -92.669, -139.606]}
                rotation={[-Math.PI, 0.671, -Math.PI / 2]}
              />
              <mesh
                name="Rectangle_4"
                geometry={nodes.Rectangle_4.geometry}
                material={materials["Material.002"]}
                position={[-9.762, -82.251, 11.614]}
                rotation={[-1.221, -0.266, -2.195]}
                scale={0.836}
              />
              <mesh
                name="Rectangle_5"
                geometry={nodes.Rectangle_5.geometry}
                material={materials["Material.011"]}
                position={[4.417, -66.886, -6.245]}
                rotation={[-1.221, -0.266, -2.195]}
                scale={0.836}
              />
              <mesh
                name="Rectangle_6"
                geometry={nodes.Rectangle_6.geometry}
                material={materials["Material.011"]}
                position={[46.523, 45.591, -58.479]}
                rotation={[-0.221, -0.659, -1.713]}
                scale={0.836}
              />
              <mesh
                name="Rectangle_6001"
                geometry={nodes.Rectangle_6001.geometry}
                material={materials["Material.002"]}
                position={[51.334, 45.041, -64.535]}
                rotation={[-0.221, -0.659, -1.713]}
                scale={0.836}
              />
            </group>
            <mesh
              name="Cube_4002"
              geometry={nodes.Cube_4002.geometry}
              material={materials["Material.005"]}
              position={[0, 2.038, 0]}
              rotation={[-1.134, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube_5"
              geometry={nodes.Cube_5.geometry}
              material={materials["Material.010"]}
              position={[139.55, -46.298, -5.065]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube_7002"
              geometry={nodes.Cube_7002.geometry}
              material={materials["Material.010"]}
              position={[-139.918, -46.298, -3.345]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube_6"
              geometry={nodes.Cube_6.geometry}
              material={materials["Material.010"]}
              position={[139.488, -2.988, -83.536]}
              rotation={[Math.PI, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube_7001"
              geometry={nodes.Cube_7001.geometry}
              material={materials["Material.010"]}
              position={[-139.979, -2.988, -81.817]}
              rotation={[Math.PI, 0, -Math.PI / 2]}
            />
          </group>
          <group name="computer-2" position={[515.783, -517.348, 225.324]}>
            <mesh
              name="Cube_5003"
              geometry={nodes.Cube_5003.geometry}
              material={materials["Material.003"]}
              position={[0.418, 0, 0]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Ellipse_2004"
              geometry={nodes.Ellipse_2004.geometry}
              material={materials["Material.011"]}
              position={[-121.915, 128.138, 48.077]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle004"
              geometry={nodes.Rectangle004.geometry}
              material={materials["Material.011"]}
              position={[-121.918, -118.659, -4.312]}
              rotation={[0, -1.571, 0]}
            />
          </group>
          <group
            name="earphone"
            position={[481.821, -234.983, 13.798]}
            rotation={[0.04, 0, -0.12]}
          >
            <group
              name="Group_50"
              position={[-38.667, 10.21, 105.47]}
              rotation={[-0.077, 0.466, -1.597]}
              scale={0.837}
            >
              <mesh
                name="Cube004"
                geometry={nodes.Cube004.geometry}
                material={materials["Material.027"]}
                position={[0, 0, -7.358]}
              />
              <mesh
                name="Rectangle_2005"
                geometry={nodes.Rectangle_2005.geometry}
                material={materials["Material.025"]}
                position={[-1.204, -0.119, 8.505]}
              />
              <mesh
                name="Rectangle_3004"
                geometry={nodes.Rectangle_3004.geometry}
                material={materials["Material.025"]}
                position={[-1.204, -0.119, 15.358]}
              />
            </group>
            <group
              name="Group_51"
              position={[-111.237, 1.413, -9.913]}
              rotation={[3.074, -0.728, 1.602]}
              scale={0.837}
            >
              <mesh
                name="Cube007"
                geometry={nodes.Cube007.geometry}
                material={materials["Material.027"]}
                position={[0, 0, -7.358]}
              />
              <mesh
                name="Rectangle_2006"
                geometry={nodes.Rectangle_2006.geometry}
                material={materials["Material.025"]}
                position={[-1.204, -0.119, 8.505]}
              />
              <mesh
                name="Rectangle_3005"
                geometry={nodes.Rectangle_3005.geometry}
                material={materials["Material.025"]}
                position={[-1.204, -0.119, 15.358]}
              />
            </group>
            <mesh
              name="Cylinder_2002"
              geometry={nodes.Cylinder_2002.geometry}
              material={nodes.Cylinder_2002.material}
              position={[-108.141, 0.251, -37.353]}
              rotation={[-1.659, 0.023, -0.755]}
              scale={1.195}
            />
            <mesh
              name="Cylinder004"
              geometry={nodes.Cylinder004.geometry}
              material={nodes.Cylinder004.material}
              position={[-14.86, 11.427, 113.341]}
              rotation={[-1.659, 0.023, -1.191]}
              scale={1.195}
            />
            <mesh
              name="line"
              geometry={nodes.line.geometry}
              material={materials["Material.023"]}
              position={[-192.136, -93.046, -3.893]}
              rotation={[-0.352, -1.365, 2.8]}
              scale={-2.04}
            />
            <mesh
              name="Torus"
              geometry={nodes.Torus.geometry}
              material={materials["Material.025"]}
              position={[-46.357, 3.62, 28.469]}
              rotation={[-1.659, 0.023, -2.588]}
              scale={[1.261, 1.195, 1.195]}
            />
          </group>
          <group
            name="Guitar"
            position={[-558.49, -331.427, -541.533]}
            rotation={[-0.397, 0.179, 0.232]}
            scale={1.092}
            ref={guitarRef}
          >
            <mesh
              name="Shape_2"
              geometry={nodes.Shape_2.geometry}
              material={materials["Material.012"]}
              position={[-82.002, -132.423, -38.903]}
            />
            <mesh
              name="Shape_3"
              geometry={nodes.Shape_3.geometry}
              material={materials["Material.002"]}
              position={[-25.829, -106.067, 3.571]}
            />
            <mesh
              name="Shape_4"
              geometry={nodes.Shape_4.geometry}
              material={materials["Material.002"]}
              position={[-27.706, -266.659, 4.484]}
            />
          </group>
          <group
            name="lamp"
            ref={lampRef}
            position={[-316.868, -107.967, -585.195]}
            rotation={[0, 1.222, 0]}
            scale={1.673}
          >
            <mesh
              name="Cube_6001"
              geometry={nodes.Cube_6001.geometry}
              material={materials["Material.006"]}
              position={[47.951, -248.792, -37.784]}
              rotation={[0, 0.698, 0]}
            />
            <mesh
              name="Cube_7004"
              geometry={nodes.Cube_7004.geometry}
              material={materials["Material.006"]}
              position={[-51.785, 282.284, 41.487]}
              rotation={[0, 0.698, Math.PI / 3]}
            />
            <mesh
              name="Cylinder_2005"
              geometry={nodes.Cylinder_2005.geometry}
              material={nodes.Cylinder_2005.material}
              position={[49.132, -333.684, -36.386]}
              rotation={[0, 0.698, 0]}
            />
            <mesh
              name="Sphere_2"
              geometry={nodes.Sphere_2.geometry}
              material={nodes.Sphere_2.material}
              position={[-62.278, 256.697, 49.132]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group
            name="music-ui"
            position={[689.315, -31.839, 9.389]}
            scale={[1, 0.815, 1]}
          >
            <mesh
              name="Rectangle_10"
              geometry={nodes.Rectangle_10.geometry}
              material={nodes.Rectangle_10.material}
              position={[-0.18, -4.677, 17.569]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_11"
              geometry={nodes.Rectangle_11.geometry}
              material={nodes.Rectangle_11.material}
              position={[-0.18, -4.677, 51.67]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_12"
              geometry={nodes.Rectangle_12.geometry}
              material={nodes.Rectangle_12.material}
              position={[-0.18, -4.677, 85.376]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_13"
              geometry={nodes.Rectangle_13.geometry}
              material={nodes.Rectangle_13.material}
              position={[-0.18, -4.677, 118.965]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_14"
              geometry={nodes.Rectangle_14.geometry}
              material={nodes.Rectangle_14.material}
              position={[-0.18, -4.677, 153.06]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_5003"
              geometry={nodes.Rectangle_5003.geometry}
              material={nodes.Rectangle_5003.material}
              position={[-0.18, -4.677, -150.997]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_6003"
              geometry={nodes.Rectangle_6003.geometry}
              material={nodes.Rectangle_6003.material}
              position={[-0.18, -4.677, -117.145]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_7001"
              geometry={nodes.Rectangle_7001.geometry}
              material={nodes.Rectangle_7001.material}
              position={[-0.18, -4.677, -83.508]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_8"
              geometry={nodes.Rectangle_8.geometry}
              material={nodes.Rectangle_8.material}
              position={[-0.18, -4.677, -49.149]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle_9002"
              geometry={nodes.Rectangle_9002.geometry}
              material={nodes.Rectangle_9002.material}
              position={[-0.18, -4.677, -16.448]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Rectangle005"
              geometry={nodes.Rectangle005.geometry}
              material={materials["Material.018"]}
              position={[6.777, 0.845, -0.043]}
              rotation={[0, -1.571, 0]}
              scale={[1, 1.227, 1]}
            />
          </group>
          <group name="photo-1" ref = {emptyFrameRef} position={[-646.413, -273.809, -835.297]}>
            <mesh
              name="Rectangle_3008"
              geometry={nodes.Rectangle_3008.geometry}
              material={materials["Material.005"]}
              position={[0, 124.12, -9.513]}
              scale={0.887}
            />
            <mesh
              name="Rectangle006"
              geometry={nodes.Rectangle006.geometry}
              material={materials["Material.011"]}
              position={[1.429, 125.828, 10.85]}
              scale={0.887}
            />
          </group>
          <group name="photo-2" ref={starPhotoRef} position={[-646.413, 304.542, -835.297]}>
            <mesh
              name="Rectangle_3009"
              geometry={nodes.Rectangle_3009.geometry}
              material={materials["Material.005"]}
              position={[0, 0, -11.729]}
              scale={0.887}
            />
            <mesh
              name="Rectangle007"
              geometry={nodes.Rectangle007.geometry}
              material={materials["Material.007"]}
              position={[1.429, 0, 10.85]}
              scale={0.887}
            />
            <mesh
              name="Shape_2001"
              geometry={nodes.Shape_2001.geometry}
              material={materials["Material.003"]}
              position={[-146.075, -53.566, 11.729]}
              scale={1.429}
            />
            <mesh
              name="Shape_3001"
              geometry={nodes.Shape_3001.geometry}
              material={materials["Material.003"]}
              position={[25.296, 20.093, 11.729]}
              scale={1.429}
            />
            <mesh
              name="Shape_4001"
              geometry={nodes.Shape_4001.geometry}
              material={materials["Material.003"]}
              position={[36.168, 28.759, 11.729]}
              scale={1.429}
            />
          </group>
          <group ref = {danceFrameRef} name="photo-3" position={[822.913, 129.717, 706.066]}>
            <mesh
              name="Rectangle_3010"
              geometry={nodes.Rectangle_3010.geometry}
              material={materials["Material.004"]}
              position={[9.484, -5.72, 0]}
              rotation={[0, -1.571, 0]}
              scale={0.54}
            />
            <mesh
              name="Rectangle008"
              geometry={nodes.Rectangle008.geometry}
              material={materials["Material.011"]}
              position={[-9.791, -5.72, 0]}
              rotation={[0, -1.571, 0]}
              scale={0.507}
            />
            <mesh
              name="Shape_2002"
              geometry={nodes.Shape_2002.geometry}
              material={materials["Material.020"]}
              position={[-25.651, 71.309, -20.633]}
              rotation={[0, -1.571, 0]}
              scale={0.691}
            />
            <mesh
              name="Shape_3002"
              geometry={nodes.Shape_3002.geometry}
              material={materials["Material.010"]}
              position={[-23.225, 65.88, -34.493]}
              rotation={[0, -1.571, 0]}
              scale={0.691}
            />
            <mesh
              name="Shape_4002"
              geometry={nodes.Shape_4002.geometry}
              material={materials["Material.019"]}
              position={[-11.048, 170, -105.415]}
              rotation={[0, -1.571, 0]}
              scale={0.691}
            />
            <mesh
              name="Shape_5"
              geometry={nodes.Shape_5.geometry}
              material={nodes.Shape_5.material}
              position={[-19.985, 49.696, -28.411]}
              rotation={[0, -1.571, 0]}
              scale={0.691}
            />
            <mesh
              name="Shape_7"
              geometry={nodes.Shape_7.geometry}
              material={nodes.Shape_7.material}
              position={[-16.536, -108.778, 67.954]}
              rotation={[0, -1.571, 0]}
              scale={0.691}
            />
            <mesh
              name="Shape_8"
              geometry={nodes.Shape_8.geometry}
              material={nodes.Shape_8.material}
              position={[-14.086, -91.412, 72.722]}
              rotation={[0, -1.571, 0]}
              scale={0.691}
            />
          </group>
          <group
            name="plant_2"
            position={[639.711, -96.336, 448.951]}
            rotation={[0, -Math.PI / 3, 0]}
            scale={1.521}
          >
            <mesh
              name="Cube_2001"
              geometry={nodes.Cube_2001.geometry}
              material={materials["Material.030"]}
              position={[-1.091, -85.486, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Cube_3"
              geometry={nodes.Cube_3.geometry}
              material={materials["Material.013"]}
              position={[7.824, 68.332, -2.539]}
              rotation={[0, 0, 0.047]}
            />
            <mesh
              name="Cube_4003"
              geometry={nodes.Cube_4003.geometry}
              material={materials["Material.008"]}
              position={[5.492, 46.53, -1.342]}
              rotation={[-0.052, 0.007, -0.125]}
            />
            <mesh
              name="Cube_5001"
              geometry={nodes.Cube_5001.geometry}
              material={materials["Material.008"]}
              position={[-9.044, 12.187, 0.73]}
              rotation={[-Math.PI, 0, 2.705]}
            />
          </group>
          <group
            ref={plantRef}
            name="plant1"
            position={[121.459, -340.722, -663.834]}
            rotation={[-Math.PI, 0.32, -Math.PI]}
            scale={[1.842, 1.829, 2.184]}
          >
            <mesh
              name="Cylinder_2003"
              geometry={nodes.Cylinder_2003.geometry}
              material={materials["Material.008"]}
              position={[-2.931, -59.751, 3.721]}
            />
            <mesh
              name="Cylinder_3001"
              geometry={nodes.Cylinder_3001.geometry}
              material={materials["Material.008"]}
              position={[29.751, 19.92, 9.976]}
              rotation={[0.096, -0.435, 0.041]}
            />
            <mesh
              name="Cylinder005"
              geometry={nodes.Cylinder005.geometry}
              material={materials["Material.005"]}
              position={[-0.962, -138.995, -2.716]}
            />
          </group>
          <group
            name="radio"
            position={[740.414, -210.108, -370.652]}
            rotation={[0, -1.039, 0]}
            scale={1.039}
          >
            <mesh
              name="Cube_2"
              geometry={nodes.Cube_2.geometry}
              material={materials["Material.031"]}
              position={[0, -4.014, -4.083]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials["Material.011"]}
              position={[27.389, 6.265, 30.127]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Cylinder_2"
              geometry={nodes.Cylinder_2.geometry}
              material={materials["Material.004"]}
              position={[15.681, -26.495, 29.773]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Cylinder_3"
              geometry={nodes.Cylinder_3.geometry}
              material={materials["Material.005"]}
              position={[34.861, -26.495, 29.773]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Rectangle_5001"
              geometry={nodes.Rectangle_5001.geometry}
              material={materials["Material.011"]}
              position={[-19.573, -8.381, 30.127]}
              scale={[1.073, 0.857, 0.857]}
            />
            <mesh
              name="Rectangle_6002"
              geometry={nodes.Rectangle_6002.geometry}
              material={nodes.Rectangle_6002.material}
              position={[-29.521, -26.641, 27.861]}
              scale={[1.004, 0.857, 0.857]}
            />
            <mesh
              name="Rectangle_7"
              geometry={nodes.Rectangle_7.geometry}
              material={materials["Material.007"]}
              position={[-13.239, -26.641, 27.861]}
              scale={[1.004, 0.857, 0.857]}
            />
            <mesh
              name="Sphere001"
              geometry={nodes.Sphere001.geometry}
              material={materials["Material.004"]}
              position={[27.367, 6.455, 33.708]}
            />
          </group>
          <group
            ref={tableRef}
            name="table"
            position={[566.558, -470.164, -221.281]}
            scale={0.702}
          >
            <group
              name="Rectangle009"
              position={[0, 230.159, 109]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            >
              <mesh
                name="Mesh_159"
                geometry={nodes.Mesh_159.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                name="Mesh_159_1"
                geometry={nodes.Mesh_159_1.geometry}
                material={materials["Material.012"]}
              />
              <mesh
                name="Mesh_159_2"
                geometry={nodes.Mesh_159_2.geometry}
                material={materials["Material.015"]}
              />
            </group>
          </group>
          <group
            ref={tableRef2}
            name="table-2"
            position={[619.152, -528.407, 711.601]}
            scale={[1, 1, 0.934]}
          >
            <mesh
              name="Cube_12"
              geometry={nodes.Cube_12.geometry}
              material={materials["Material.003"]}
              position={[154.213, -149.506, 4.453]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.324, 1, 1]}
            />
            <mesh
              name="Cube_5002"
              geometry={nodes.Cube_5002.geometry}
              material={materials["Material.005"]}
              position={[0, 131.006, -3.463]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
          </group>
          <group
            ref={videoRef}
            name="video-ui"
            position={[694.147, 306.445, -410.953]}
            rotation={[0, -1.571, 0]}
          >
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials["Material.007"]}
              position={[-1.096, 90.631, 8.529]}
            />
            <mesh
              name="Rectangle_2007"
              geometry={nodes.Rectangle_2007.geometry}
              material={materials["Material.005"]}
              position={[0, 0, -15.529]}
            />
            <mesh
              name="Rectangle_3006"
              geometry={nodes.Rectangle_3006.geometry}
              material={materials["Material.001"]}
              position={[-0.082, 90.215, 0.091]}
              scale={[0.963, 1, 1]}
            />
            <mesh
              name="Rectangle_5004"
              geometry={nodes.Rectangle_5004.geometry}
              material={nodes.Rectangle_5004.material}
              position={[-54.412, -63.896, 1.415]}
              scale={[0.963, 1, 1]}
            />
            <mesh
              name="Rectangle_6004"
              geometry={nodes.Rectangle_6004.geometry}
              material={nodes.Rectangle_6004.material}
              position={[-81.37, -111.262, 1.415]}
              scale={[0.963, 1, 1]}
            />
            <mesh
              name="Rectangle_7002"
              geometry={nodes.Rectangle_7002.geometry}
              material={nodes.Rectangle_7002.material}
              position={[-17.343, -156.403, 1.415]}
              scale={[0.963, 1, 1]}
            />
            <mesh
              name="Triangle"
              geometry={nodes.Triangle.geometry}
              material={nodes.Triangle.material}
              position={[4.984, 90.898, 9.529]}
              rotation={[0, 0, -Math.PI / 2]}
            />
          </group>
          <group name="window" position={[-43.228, 255.289, -833.016]}>
            <mesh
              name="Cube_4004"
              geometry={nodes.Cube_4004.geometry}
              material={materials["Material.004"]}
              position={[0.635, 0.938, -10.808]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube_5004"
              geometry={nodes.Cube_5004.geometry}
              material={materials["Material.005"]}
              position={[1.686, 105.584, 0]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              name="窗户"
              geometry={nodes.窗户.geometry}
              material={nodes.窗户.material}
              position={[0, -198.5, 9.159]}
              rotation={[0, 0, -Math.PI / 2]}
            />
          </group>
          <mesh
            name="Ellipse_2"
            geometry={nodes.Ellipse_2.geometry}
            material={materials["Material.011"]}
            position={[-517.765, -484.515, -468.851]}
            rotation={[-0.401, 0.175, 0.227]}
          />
          <mesh
            name="icon"
            geometry={nodes.icon.geometry}
            material={nodes.icon.material}
            position={[715.693, -104.429, 824.957]}
            rotation={[-0.342, -1.138, -1.081]}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials["Material.022"]}
            position={[191.521, -579.485, -386.943]}
            rotation={[0, -1.571, 0]}
          />
        </group>
        <mesh
          ref={wallRef}
          name="Walls"
          geometry={nodes.Walls.geometry}
          material={materials["Material.002"]}
          position={[33.168, -323.764, -23.547]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.702}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/Room.glb");

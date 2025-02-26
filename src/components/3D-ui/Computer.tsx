import { Environment, Html } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Computer = () => {
  const gltf = useLoader(GLTFLoader, "/models/computer.gltf");
  const computerRef = useRef<Group>(null);
  const { size } = useThree();

  useEffect(() => {
    if (computerRef.current) {
      const mouse = computerRef.current.getObjectByName("Object_13");
      const keyboard = computerRef.current.getObjectByName("Object_15");

      computerRef.current.rotation.y = -0.2;
      // computerRef.current.scale.setScalar(1.1);

      if (mouse) {
        mouse.position.set(-1, 4.5, -1);
        mouse.scale.setScalar(0.55);
        mouse.rotation.x = 0.3;
      }

      if (keyboard) {
        keyboard.position.set(0, 3, -1);
        keyboard.scale.setScalar(0.55);
        keyboard.rotation.z = -0.3;
        keyboard.rotation.x = 0.2;
      }
    }
  }, []);

  useEffect(() => {
    const mediumScreen = size.width > 749.3;
    // TODO: change the dividend on screen below medium
    const scale = Math.min(size.width / 650, 2);

    const xPos = mediumScreen ? 9.2 : -0.5;
    const yPos = -size.width / 150;

    if (computerRef.current) {
      computerRef.current.position.set(xPos, yPos, 5);

      computerRef.current.scale.setScalar(scale);
    }
  }, [size.width]);

  return (
    <>
      <Environment preset="city" environmentIntensity={0.6} />
      <primitive object={gltf.scene} ref={computerRef}>
        <Html transform position={[0.4, 7.15, -4]}>
          <img
            src="/images/NURBS-visualizer.gif"
            alt="NURBS gif"
            width="470"
            height="auto"
          />
        </Html>
      </primitive>
    </>
  );
};

export default Computer;

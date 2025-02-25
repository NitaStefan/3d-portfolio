import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DirectionalLight, Group } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Computer = () => {
  const gltf = useLoader(GLTFLoader, "/models/computer.gltf");
  const computerRef = useRef<Group>(null);
  const dirLight = useRef<DirectionalLight>(null);
  const { size } = useThree();

  // useHelper(dirLight, DirectionalLightHelper, "red");

  useEffect(() => {
    if (computerRef.current) {
      const mouse = computerRef.current.getObjectByName("Object_13");
      const keyboard = computerRef.current.getObjectByName("Object_15");

      computerRef.current.rotation.y = -0.2;
      computerRef.current.scale.setScalar(1.1);

      if (mouse) {
        mouse.position.set(-1, 4.5, -1);
        mouse.scale.setScalar(0.6);
        mouse.rotation.x = 0.3;
      }

      if (keyboard) {
        keyboard.position.set(0, 3, -1);
        keyboard.scale.setScalar(0.6);
        keyboard.rotation.z = -0.3;
        keyboard.rotation.x = 0.2;
      }
    }
  }, []);

  useEffect(() => {
    const mediumScreen = size.width > 749.3;

    if (computerRef.current && dirLight.current) {
      computerRef.current.position.set(mediumScreen ? 10 : -0.5, -2, 5);
      dirLight.current.position.set(mediumScreen ? 10 : -3, 5, 3);
    }
  }, [size.width]);
  return (
    <>
      <directionalLight intensity={0.5} ref={dirLight} target={gltf.scene} />

      <primitive object={gltf.scene} ref={computerRef} />
    </>
  );
};

export default Computer;

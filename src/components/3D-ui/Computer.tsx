import { Environment, Html } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { ProjectName } from "../../types";

const Computer = ({ selectedProject }: { selectedProject: ProjectName }) => {
  const gltf = useLoader(GLTFLoader, "/models/computer.gltf");
  const computerRef = useRef<Group>(null);
  const { size } = useThree();

  useEffect(() => {
    if (computerRef.current) {
      const mouse = computerRef.current.getObjectByName("Object_13");
      const keyboard = computerRef.current.getObjectByName("Object_15");

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
    const scale = mediumScreen
      ? Math.min(size.width / 650, 1.7)
      : Math.min(size.width / 280, 1.5);
    const yRotation = mediumScreen ? -0.2 : 0;

    const xPos = mediumScreen ? 9.2 : -0.5;
    const yPos = mediumScreen
      ? -14 + 10 + Math.pow(2, 4.2 - scale)
      : -2 + 15.5 - scale * 1.5;

    if (computerRef.current) {
      computerRef.current.position.set(xPos, yPos, 5);
      computerRef.current.scale.setScalar(scale);
      computerRef.current.rotation.y = yRotation;
    }
  }, [size.width]);

  return (
    <>
      <Environment preset="city" environmentIntensity={0.6} />
      <primitive
        object={gltf.scene}
        ref={computerRef}
        // visible={selectedProject === "NURBS"}
      >
        <Html transform position={[0.4, 7.15, -4]} distanceFactor={2.7}>
          <img
            src="/images/peak-planner.gif"
            alt="Peak Planner gif"
            width={1760}
            height="auto"
            style={{
              minWidth: "1760px",
              display: selectedProject === "Peak Planner" ? "block" : "none",
            }}
          />
          <img
            src="/images/NURBS-visualizer.gif"
            alt="NURBS gif"
            width={1760}
            height="auto"
            style={{
              minWidth: "1760px",
              display:
                selectedProject === "NURBS Surface Visualizer"
                  ? "block"
                  : "none",
            }}
          />
          <div
            className="bg-black py-[70px]"
            style={{
              display:
                selectedProject === "Handmade Products Store"
                  ? "block"
                  : "none",
            }}
          >
            <img
              src="/images/hm-showcase.gif"
              alt="Handmade Store gif"
              width={1760}
              height="auto"
              style={{
                minWidth: "1760px",
              }}
            />
          </div>
          <div
            className="bg-black py-[230px]"
            style={{
              display:
                selectedProject === "Hospital Appointments Manager"
                  ? "block"
                  : "none",
            }}
          >
            <img
              src="/images/appointments-manager.gif"
              alt="Appointments Manager gif"
              width={1760}
              height="auto"
              style={{
                minWidth: "1760px",
              }}
            />
          </div>
        </Html>
      </primitive>
    </>
  );
};

export default Computer;

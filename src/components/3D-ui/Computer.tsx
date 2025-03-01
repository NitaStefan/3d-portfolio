import { Environment, Html } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { ProjectName } from "../../types";
import gsap from "gsap";
import ProjectDesktopViews from "../ui/ProjectDesktopViews";
import useSetupComputer from "../../hooks/useSetupComputer";
import useSetupMobile from "../../hooks/useSetupMobile";

const Computer = ({
  selectedProject,
  showMobile,
}: {
  selectedProject: ProjectName;
  showMobile?: boolean;
}) => {
  const computer = useLoader(GLTFLoader, "/models/computer.gltf");
  //TODO: Draco loader for phone
  const mobile = useLoader(GLTFLoader, "/models/phone.gltf");
  const computerRef = useRef<Group>(null);
  const mobileRef = useRef<Group>(null);
  const { size } = useThree();

  useSetupComputer(computerRef);
  useSetupMobile(mobileRef);

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
      computerRef.current.position.setY(yPos);
      computerRef.current.scale.setScalar(scale);
      computerRef.current.rotation.y = yRotation;

      gsap.to(computerRef.current.position, {
        x: showMobile !== undefined && showMobile ? 80 : xPos,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [size.width, showMobile]);
  return (
    <>
      <Environment preset="city" environmentIntensity={0.6} />
      <primitive object={computer.scene} ref={computerRef}>
        <Html transform position={[0.4, 7.15, -4]} distanceFactor={2.7}>
          <ProjectDesktopViews selectedProject={selectedProject} />
        </Html>
      </primitive>
      <primitive object={mobile.scene} ref={mobileRef}></primitive>
    </>
  );
};

export default Computer;

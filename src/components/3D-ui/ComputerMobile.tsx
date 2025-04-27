import { Environment, Html, useGLTF } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { ProjectName } from "../../types";
import gsap from "gsap";
import ProjectDesktopViews from "../ui/ProjectDesktopViews";
import useSetupComputer from "../../hooks/useSetupComputer";

const Computer = ({
  selectedProject,
  showMobile,
  isClose,
}: {
  selectedProject: ProjectName;
  showMobile?: boolean;
  isClose: boolean;
}) => {
  const computer = useLoader(GLTFLoader, "/models/computer.gltf");
  const mobile = useGLTF(
    "/models/phone.gltf",
    "https://www.gstatic.com/draco/versioned/decoders/1.4.0/",
  );
  const computerRef = useRef<Group>(null);
  const mobileRef = useRef<Group>(null);

  const { size } = useThree();

  useSetupComputer(computerRef);

  useEffect(() => {
    const mediumScreen = size.width > 749.3;

    let scale = mediumScreen
      ? Math.min(size.width / 650, 1.7)
      : Math.min(size.width / 280, 1.5);
    const yRotation = mediumScreen && !isClose ? -0.2 : 0;
    const xPos = mediumScreen ? (isClose ? 0 : 9.2) : -0.5;
    scale =
      isClose && mediumScreen ? (showMobile ? scale * 1.5 : scale * 3) : scale;
    let yPos = mediumScreen
      ? -14 + 10 + Math.pow(2, 4.2 - scale)
      : -2 + 15.5 - scale * 1.5;

    yPos =
      isClose && mediumScreen ? yPos - scale * (showMobile ? 2.3 : 4) : yPos;

    if (computerRef.current) {
      computerRef.current.position.setY(yPos);
      computerRef.current.scale.setScalar(scale);
      computerRef.current.rotation.y = yRotation;

      gsap.to(computerRef.current.position, {
        x: showMobile !== undefined && showMobile ? 80 : xPos,
        duration: 0.55,
        ease: "power2.out",
      });
    }

    if (mobileRef.current) {
      mobileRef.current.position.setY(yPos + (mediumScreen ? -5 : 2.2));
      mobileRef.current.scale.setScalar(scale * (mediumScreen ? 5 : 3.5));
      mobileRef.current.rotation.y = yRotation * 1.5;

      gsap.to(mobileRef.current.position, {
        x: showMobile !== undefined && showMobile ? xPos : 80,
        duration: 0.55,
        ease: "power2.out",
      });
    }
  }, [size.width, showMobile, isClose]);
  return (
    <>
      <Environment preset="city" environmentIntensity={0.6} />
      <primitive object={computer.scene} ref={computerRef}>
        <Html transform position={[0.4, 7.15, -4]} distanceFactor={2.7}>
          <ProjectDesktopViews selectedProject={selectedProject} />
        </Html>
      </primitive>
      <primitive object={mobile.scene} ref={mobileRef}>
        <Html transform position={[0.17, 1.34, 0.05]} distanceFactor={0.333}>
          <div className="rounded-[230px] bg-black px-[30px]">
            <img
              src="/images/peak-planner-mobile.gif"
              alt="Peak Planner gif"
              width={1760}
              height="auto"
              style={{
                clipPath: "inset(0 0 4px 0)",
                borderRadius: "270px",
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

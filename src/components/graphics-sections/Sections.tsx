import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import {
  CERTIFICATES_SECTION_HEIGHT,
  PROJECTS_SECTION_HEIGHT,
  SKILLS_SECTION_HEIGHT,
} from "../../constants";
import Skills3D from "./Skills3D";
import Projects3D from "./Projects3D";
import { ProjectName } from "../../types";
import Certificates3D from "./Certificates3D";

const Sections = ({
  selectedProject,
  showMobile,
  isClose,
}: {
  selectedProject: ProjectName;
  showMobile?: boolean;
  isClose: boolean;
}) => {
  const { viewport, size } = useThree();
  const initHeightRef = useRef<number>(size.height);
  const skillsSection = useRef<Group>(null);
  const projectsSection = useRef<Group>(null);
  const certificatesSection = useRef<Group>(null);

  useEffect(() => {
    const handleScroll = () => {
      const extraScroll = size.height - initHeightRef.current;

      // yPosition - center of the section container
      const yPositionSkills =
        (viewport.height / size.height) *
        (window.scrollY +
          extraScroll -
          (size.height + SKILLS_SECTION_HEIGHT) / 2);

      const yPositionProjects =
        (viewport.height / size.height) *
        (window.scrollY +
          extraScroll -
          (size.height / 2 +
            SKILLS_SECTION_HEIGHT / 2 +
            PROJECTS_SECTION_HEIGHT));

      const yPositionCertificates =
        (viewport.height / size.height) *
        (window.scrollY +
          extraScroll -
          (size.height / 2 +
            SKILLS_SECTION_HEIGHT / 2 +
            PROJECTS_SECTION_HEIGHT +
            CERTIFICATES_SECTION_HEIGHT * 1.67));

      // keep the same scale even on height resize
      const scalar = (viewport.height / size.height) * 20;

      skillsSection.current!.position.y = yPositionSkills;
      projectsSection.current!.position.y = yPositionProjects;
      certificatesSection.current!.position.y = yPositionCertificates;

      // if (skillsSection.current)
      //   gsap.to(skillsSection.current.position, {
      //     y: yPositionSkills,
      //     duration: 0.01,
      //     ease: "power4.out",
      //   });

      // if (projectsSection.current)
      //   gsap.to(projectsSection.current.position, {
      //     y: yPositionProjects,
      //     duration: 0.01,
      //     ease: "power4.out",
      //   });

      // if (certificatesSection.current)
      //   gsap.to(certificatesSection.current.position, {
      //     y: yPositionCertificates,
      //     duration: 0.01,
      //     ease: "power4.out",
      //   });

      // console.log("Tweens count:", gsap.globalTimeline.getChildren().length);

      skillsSection.current?.scale.setScalar(scalar);
      projectsSection.current?.scale.setScalar(scalar);
      certificatesSection.current?.scale.setScalar(scalar);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [viewport.height, viewport.width, size.height]); // viewport.height - constant

  return (
    <>
      <group ref={skillsSection} position-y={-100}>
        <Skills3D />
      </group>
      <group ref={projectsSection} position-y={-100}>
        <Projects3D
          selectedProject={selectedProject}
          showMobile={showMobile}
          isClose={isClose}
        />
      </group>
      <group ref={certificatesSection} position-y={-100}>
        <Certificates3D />
      </group>
    </>
  );
};

export default Sections;

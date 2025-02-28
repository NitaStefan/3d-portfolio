import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import {
  PROJECTS_SECTION_HEIGHT,
  SKILLS_SECTION_HEIGHT,
} from "../../constants";
import Skills3D from "./Skills3D";
import Projects3D from "./Projects3D";
import { ProjectName } from "../../types";

const Sections = ({ selectedProject }: { selectedProject: ProjectName }) => {
  //TODD: move a bit more below, if the top bar is present on mobiles
  const { viewport, size } = useThree();
  const skillsSection = useRef<Group>(null);
  const projectsSection = useRef<Group>(null);

  useEffect(() => {
    const handleScroll = () => {
      // yPosition - center of the section container
      const yPositionSkills =
        (viewport.height / size.height) *
        (window.scrollY - (size.height + SKILLS_SECTION_HEIGHT) / 2);

      const yPositionProjects =
        (viewport.height / size.height) *
        (window.scrollY -
          (size.height / 2 +
            SKILLS_SECTION_HEIGHT / 2 +
            PROJECTS_SECTION_HEIGHT));

      // keep the same scale even in height resize
      const scalar = (viewport.height / size.height) * 20;

      skillsSection.current?.position.setY(yPositionSkills);
      skillsSection.current?.scale.setScalar(scalar);

      projectsSection.current?.position.setY(yPositionProjects);
      projectsSection.current?.scale.setScalar(scalar);
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
        <Projects3D selectedProject={selectedProject} />
      </group>
    </>
  );
};

export default Sections;

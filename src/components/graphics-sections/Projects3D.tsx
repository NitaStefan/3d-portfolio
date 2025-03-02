import { ProjectName } from "../../types";
import Computer from "../3D-ui/ComputerMobile";
import ProjectsIcon from "../3D-ui/ProjectsIcon";

const Projects3D = ({
  selectedProject,
  showMobile,
}: {
  selectedProject: ProjectName;
  showMobile?: boolean;
}) => {
  return (
    <>
      <ProjectsIcon />
      <Computer selectedProject={selectedProject} showMobile={showMobile} />
    </>
  );
};

export default Projects3D;

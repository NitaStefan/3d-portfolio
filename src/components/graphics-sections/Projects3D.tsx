import { ProjectName } from "../../types";
import Computer from "../3D-ui/ComputerMobile";
import ProjectsIcon from "../3D-ui/ProjectsIcon";

const Projects3D = ({
  selectedProject,
  showMobile,
  isClose,
}: {
  selectedProject: ProjectName;
  showMobile?: boolean;
  isClose: boolean;
}) => {
  return (
    <>
      <ProjectsIcon />
      <Computer
        selectedProject={selectedProject}
        showMobile={showMobile}
        isClose={isClose}
      />
    </>
  );
};

export default Projects3D;

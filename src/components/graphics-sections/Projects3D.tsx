import { ProjectName } from "../../types";
import Computer from "../3D-ui/Computer";
import ProjectsIcon from "../3D-ui/ProjectsIcon";

const Projects3D = ({ selectedProject }: { selectedProject: ProjectName }) => {
  return (
    <>
      <ProjectsIcon />
      <Computer selectedProject={selectedProject} />
    </>
  );
};

export default Projects3D;

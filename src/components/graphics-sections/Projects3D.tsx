import Computer from "../3D-ui/Computer";
import ProjectsIcon from "../3D-ui/ProjectsIcon";
import Test from "../3D-ui/Test";

const Projects3D = ({ selectedProject }: { selectedProject: string }) => {
  return (
    <>
      <ProjectsIcon />
      <Computer selectedProject={selectedProject} />
      <Test />
    </>
  );
};

export default Projects3D;

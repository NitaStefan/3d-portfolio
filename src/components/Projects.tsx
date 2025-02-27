import { PROJECTS_SECTION_HEIGHT } from "../constants";
import { ProjectName } from "../types";

const Projects = ({
  handleProjectChange,
}: {
  handleProjectChange: (project: ProjectName) => void;
}) => {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{ height: `${PROJECTS_SECTION_HEIGHT}px` }}
    >
      <h2 className="text-primary bg-secondary/20 absolute top-[20px] rounded-md py-[5px] pr-[15px] pl-[60px] text-2xl font-medium">
        Projects
      </h2>
      <div className="bg-medium-gray mr-[50%] h-[300px] w-[300px] px-[15px] max-md:mt-[650px] max-md:mr-0 max-md:w-full">
        <button onClick={() => handleProjectChange("NURBS")}>[ NURBS ]</button>
        <button onClick={() => handleProjectChange("HM Showcase")}>
          [ HM Showcase ]
        </button>
        <button onClick={() => handleProjectChange("Appointment Manager")}>
          [ Appointment Manager ]
        </button>
      </div>
    </section>
  );
};

export default Projects;

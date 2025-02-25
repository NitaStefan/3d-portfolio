import { PROJECTS_SECTION_HEIGHT } from "../constants";

const Projects = () => {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{ height: `${PROJECTS_SECTION_HEIGHT}px` }}
    >
      <h2 className="text-primary bg-secondary/20 absolute top-[20px] rounded-md py-[5px] pr-[15px] pl-[60px] text-2xl font-medium">
        Projects
      </h2>
      <div className="bg-medium-gray mr-[50%] h-[300px] w-[300px] px-[15px] max-md:mt-[500px] max-md:mr-0 max-md:w-full"></div>
    </section>
  );
};

export default Projects;

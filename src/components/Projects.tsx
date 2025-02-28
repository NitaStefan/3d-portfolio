import { projects, PROJECTS_SECTION_HEIGHT } from "../constants";
import { Project } from "../types";

const Projects = ({
  selectedProject,
  handleProjectChange,
}: {
  selectedProject: Project;
  handleProjectChange: (project: Project) => void;
}) => {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{ height: `${PROJECTS_SECTION_HEIGHT}px` }}
    >
      <h2 className="text-primary bg-secondary/20 absolute top-[20px] rounded-md py-[5px] pr-[15px] pl-[60px] text-2xl font-medium">
        Projects
      </h2>
      <div className="bg-dark-gray/65 mr-[50%] w-[420px] px-[15px] max-md:mt-[500px] max-md:mr-0 max-md:w-full">
        <div className="flex flex-col items-center max-md:rounded-md max-md:px-[10px] md:h-[400px]">
          <h3 className="text-primary border-primary w-full rounded-full border-[3px] text-center text-lg font-bold max-md:[text-shadow:_1px_2px_4px_rgb(0_0_0_/_0.8)]">
            <span className="">{selectedProject.title}</span>
          </h3>
          <em className="text-light-gray max-md:text-lotion/70 w-full pt-[3px] text-center text-sm">
            {selectedProject.subtitle}
          </em>
          <div className="my-[20px] grid w-full grid-cols-4 gap-[8px] max-md:mb-[5px]">
            {selectedProject.techStack.map((tech) => (
              <div className="flex flex-col items-center gap-[3px]">
                <img
                  src={tech.imgURL}
                  alt={tech.title}
                  height={30}
                  width={30}
                  className="rounded-md"
                />
                <span className="text-light-gray text-center text-[11px]">
                  {tech.title}
                </span>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col gap-[10px]">
            {selectedProject.features.map((feature) => (
              <span className="text-secondary border-secondary w-full rounded-md border border-dashed text-center">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-medium-gray mt-[20px] flex flex-col items-start gap-[10px] rounded-md p-[10px]">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => handleProjectChange(project)}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

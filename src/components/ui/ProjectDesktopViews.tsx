import { ProjectName } from "../../types";

const ProjectDesktopViews = ({
  selectedProject,
}: {
  selectedProject: ProjectName;
}) => {
  return (
    <>
      <img
        src="/images/peak-planner.gif"
        alt="Peak Planner gif"
        width={1760}
        height="auto"
        style={{
          minWidth: "1760px",
          display: selectedProject === "Peak Planner" ? "block" : "none",
        }}
      />
      <img
        src="/images/NURBS-visualizer.gif"
        alt="NURBS gif"
        width={1760}
        height="auto"
        style={{
          minWidth: "1760px",
          display:
            selectedProject === "NURBS Surface Visualizer" ? "block" : "none",
        }}
      />
      <div
        className="bg-black py-[70px]"
        style={{
          display:
            selectedProject === "Handmade Products Store" ? "block" : "none",
        }}
      >
        <img
          src="/images/hm-showcase.gif"
          alt="Handmade Store gif"
          width={1760}
          height="auto"
          style={{
            minWidth: "1760px",
          }}
        />
      </div>
      <div
        className="bg-black py-[230px]"
        style={{
          display:
            selectedProject === "Hospital Appointments Manager"
              ? "block"
              : "none",
        }}
      >
        <img
          src="/images/appointments-manager.gif"
          alt="Appointments Manager gif"
          width={1760}
          height="auto"
          style={{
            minWidth: "1760px",
          }}
        />
      </div>
    </>
  );
};

export default ProjectDesktopViews;

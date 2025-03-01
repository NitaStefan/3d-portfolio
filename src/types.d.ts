import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace React {
    namespace JSX {
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

type ProjectName =
  | "NURBS Surface Visualizer"
  | "Peak Planner"
  | "Handmade Products Store"
  | "Hospital Appointments Manager";

type Project = {
  title: ProjectName;
  subtitle: string;
  techStack: { title: string; imgURL: string }[];
  features: string[];
  link?: string;
  showMobile?: boolean;
};

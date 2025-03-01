import { Project } from "./types";

export const SKILLS_SECTION_HEIGHT = 700;
export const PROJECTS_SECTION_HEIGHT = 1000;
// export const CERTIFICATES_SECTION_HEIGHT = 300;
export const CERTIFICATES_SECTION_HEIGHT = 1000;

export const projects: Project[] = [
  {
    title: "Peak Planner",
    subtitle: "Scheduling & Goal-Tracking Application",
    techStack: [
      { title: "Next.js", imgURL: "/images/nextjs-logo.png" },
      { title: "Typescript", imgURL: "/images/ts-logo.png" },
      { title: "TailwindCSS", imgURL: "/images/tailwind-logo.png" },
      { title: "Shadcn UI", imgURL: "/images/shadcn-ui-logo.png" },
      { title: "React Hook Form", imgURL: "/images/react-hook-form-logo.png" },
      { title: "Zod", imgURL: "/images/zod-logo.png" },
      { title: "Spring", imgURL: "/images/spring-logo.png" },
      { title: "MySQL", imgURL: "/images/mysql-logo.png" },
    ],
    features: [
      "Intuitive Schedule Display",
      "Flexible Goal-Activity Linking",
      "Highly Customizable & Versatile",
      "Secure JWT Authentication",
    ],
    link: "https://peak-planner-frontend.vercel.app/",
  },
  {
    title: "NURBS Surface Visualizer",
    subtitle: "Interactive 3D visualization tool for NURBS surfaces",
    techStack: [
      { title: "React.js", imgURL: "/images/react-logo.png" },
      { title: "React Three Fiber", imgURL: "/images/r3f-logo.png" },
      { title: "Material UI", imgURL: "/images/material-ui-logo.png" },
      { title: "MathJax", imgURL: "/images/mathjax-logo.png" },
    ],
    features: [
      "Real-Time Surface Computation",
      "Interactive Surface Exploration",
      "NURBS-Based Modeling",
      "Precise Geometric Representation",
    ],
    link: "https://nitastefan.github.io/NURBS-Visualizer/",
  },
  {
    title: "Hospital Appointments Manager",
    subtitle: "Application for managing hospital appointments",
    techStack: [
      { title: "JavaFX", imgURL: "/images/javafx-logo.png" },
      { title: "SQLite", imgURL: "/images/sqlite-logo.png" },
      { title: "JDBC", imgURL: "/images/jdbc-logo.png" },
    ],
    features: ["CRUD Operations", "Layered Architecture"],
  },
  {
    title: "Handmade Products Store",
    subtitle: "Presentation of different handmade accessories",
    techStack: [{ title: "React.js", imgURL: "/images/react-logo.png" }],
    features: ["Handcrafted Product Showcases"],
  },
];

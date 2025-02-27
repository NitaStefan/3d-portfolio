import { Canvas } from "@react-three/fiber";
import Hero from "./components/Hero";
import Sections from "./components/graphics-sections/Sections";
import { Perf } from "r3f-perf";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState } from "react";
import Certificates from "./components/Certificates";
import { ProjectName } from "./types";

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectName>("NURBS");

  const handleProjectChange = (project: ProjectName) => {
    setSelectedProject(project);
  };

  return (
    <main className="mx-auto max-w-4xl">
      <Hero />
      <section className="fixed top-0 left-0 h-full w-full">
        <Canvas>
          <Perf position="top-left" />
          <Sections selectedProject={selectedProject} />
        </Canvas>
      </section>
      <Skills />
      <Projects handleProjectChange={handleProjectChange} />
      <Certificates />
    </main>
  );
}

export default App;

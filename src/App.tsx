import { Canvas } from "@react-three/fiber";
import Hero from "./components/Hero";
import Sections from "./components/graphics-sections/Sections";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState } from "react";
import Certificates from "./components/Certificates";
import { Project } from "./types";
import { projects } from "./constants";
import Footer from "./components/Footer";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const handleProjectChange = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <main className="mx-auto max-w-4xl">
      <section className="fixed top-0 left-0 h-full w-full">
        <Canvas>
          <Sections
            selectedProject={selectedProject.title}
            showMobile={selectedProject.showMobile}
          />
        </Canvas>
      </section>
      <Hero />
      <Skills />
      <Projects
        handleProjectChange={handleProjectChange}
        selectedProject={selectedProject}
      />
      <Certificates />
      <Footer />
    </main>
  );
}

export default App;

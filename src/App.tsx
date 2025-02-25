import { Canvas } from "@react-three/fiber";
import Hero from "./components/Hero";
import Sections from "./components/graphics-sections/Sections";
// import { Perf } from "r3f-perf"
import AdditionalSection from "./components/Certificates";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="mx-auto max-w-4xl">
      <Hero />
      <section className="fixed top-0 left-0 h-full w-full">
        <Canvas>
          {/* <Perf position="top-left" /> */}
          <Sections />
        </Canvas>
      </section>
      <Skills />
      <Projects />
      <AdditionalSection />
    </main>
  );
}

export default App;

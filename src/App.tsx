import { Canvas } from "@react-three/fiber"
import Hero from "./components/Hero"
import Sections from "./components/graphics-sections/Sections"
// import { Perf } from "r3f-perf"
import AdditionalSection from "./components/AdditionalSection"
import SkillsSectionSpace from "./components/SkillsSectionSpace"
import Projects from "./components/Projects"

function App() {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <section className="fixed top-0 left-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 20] }}>
          {/* <Perf position="top-left" /> */}
          <Sections />
        </Canvas>
      </section>
      {/* height: 600px */}
      <SkillsSectionSpace />
      <Projects />
      <AdditionalSection />
    </main>
  )
}

export default App

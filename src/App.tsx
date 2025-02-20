import { Canvas } from "@react-three/fiber"
import Hero from "./components/ui/Hero"
import Projects from "./components/ui/Projects"
import Visuals from "./components/Visuals"
// import { Perf } from "r3f-perf"
import AdditionalSection from "./components/ui/AdditionalSection"
import SkillsSectionSpace from "./components/ui/SkillsSectionSpace"

function App() {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <section className="fixed top-0 left-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 20] }}>
          {/* <Perf position="top-left" /> */}
          <Visuals />
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

import { Canvas } from "@react-three/fiber"
import Hero from "./components/Hero"
import Sections from "./components/graphics-sections/Sections"
// import { Perf } from "r3f-perf"
import AdditionalSection from "./components/AdditionalSection"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <section className="fixed top-0 left-0 w-full h-full">
        <Canvas>
          {/* <Perf position="top-left" /> */}
          <Sections />
        </Canvas>
      </section>
      {/* height: 600px */}
      <Skills />
      <Projects />
      <AdditionalSection />
    </main>
  )
}

export default App

import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"
import { SKILLS_SECTION_HEIGHT } from "../../constants"
import Skills3D from "./Skills3D"

const Sections = () => {
  const skillsSection = useRef<Group>(null)
  const { viewport, size } = useThree()

  useEffect(() => {
    const handleScroll = () => {
      const yPosition =
        (viewport.height / size.height) *
        (window.scrollY - (size.height + SKILLS_SECTION_HEIGHT) / 2)

      skillsSection.current?.position.setY(yPosition)
      // keep the same scale even in height resize
      skillsSection.current?.scale.setScalar(
        (viewport.height / size.height) * 20
      )
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [viewport.height, viewport.width, size.height]) // viewport.height - constant

  return (
    <>
      <group ref={skillsSection} position-y={-100}>
        <Skills3D />
      </group>
    </>
  )
}

export default Sections

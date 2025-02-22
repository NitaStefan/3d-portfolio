import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"
import { SKILLS_SECTION_HEIGHT } from "../../constants"
import Skills3D from "./Skills3D"

const Sections = () => {
  const skillsSection = useRef<Group>(null)
  const { viewport, size } = useThree()

  //TODO: create a hook out of this to compute height for every mesh based on px (efficient - recalculated only on screen height change)
  useEffect(() => {
    const handleScroll = () => {
      const skillsSectionUnits =
        viewport.height * (SKILLS_SECTION_HEIGHT / size.height)

      const scrollAmount =
        (window.scrollY / (size.height + SKILLS_SECTION_HEIGHT)) *
        (viewport.height + skillsSectionUnits)

      skillsSection.current?.position.setY(
        -viewport.height / 2 - skillsSectionUnits / 2 + scrollAmount
      )
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [viewport.height, size.height]) // viewport.height - constant

  // const skillsSectionUnits =
  //   viewport.height * (SKILLS_SECTION_HEIGHT / size.height)

  return (
    <>
      <group
        ref={skillsSection}
        // position={[0, -viewport.height / 2 - skillsSectionUnits / 2, 0]}
        // scale={[2, 2, 2]}
      >
        <Skills3D />
      </group>
    </>
  )
}

export default Sections

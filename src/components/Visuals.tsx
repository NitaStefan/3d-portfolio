import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"
import { SKILLS_SECTION_HEIGHT } from "../constants"

const Visuals = () => {
  const skillsSection = useRef<Group>(null)
  const { viewport, size } = useThree()

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
  }, [viewport.height, size.height])

  // Animation
  useFrame(({ clock }) => {
    if (skillsSection.current) {
      skillsSection.current.rotation.x += 0.001
      skillsSection.current.rotation.y += 0.0005
      const scaleFactor = 1 + 0.2 * Math.sin(clock.elapsedTime)
      skillsSection.current.scale.setScalar(scaleFactor)
    }
  })

  const skillsSectionUnits =
    viewport.height * (SKILLS_SECTION_HEIGHT / size.height)

  return (
    <>
      <group
        ref={skillsSection}
        position={[0, -viewport.height / 2 - skillsSectionUnits / 2, 0]}
      >
        <mesh>
          <dodecahedronGeometry />
          <meshBasicMaterial color="blue" wireframe />
        </mesh>
      </group>
      {/* <group
        ref={skillsSection}
        position={[
          0,
          -viewport.height / 2 -
            (viewport.height * (SKILLS_SECTION_HEIGHT / window.innerHeight)) / 2,
          0,
        ]}
      >
        <mesh>
          <dodecahedronGeometry />
          <meshBasicMaterial color="blue" wireframe />
        </mesh>
      </group> */}

      {/* <mesh position={[0, 9.2, 0]}>
        <dodecahedronGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
      <mesh position={[0, -9.2, 0]}>
        <dodecahedronGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
      <mesh position={[0, 9.2, 0]} scale={0.02}>
        <dodecahedronGeometry />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
      <mesh position={[0, -9.2, 0]} scale={0.02}>
        <dodecahedronGeometry />
        <meshBasicMaterial color="orange" wireframe />
      </mesh> */}
    </>
  )
}

export default Visuals

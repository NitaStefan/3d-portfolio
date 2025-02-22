import SkillsIcon from "../3D-ui/SkillsIcon"
import Test from "../3D-ui/Test"

const Skills3D = () => {
  return (
    <mesh>
      <dodecahedronGeometry />
      <meshBasicMaterial color="blue" wireframe />
      <Test />
      <SkillsIcon />
    </mesh>
  )
}

export default Skills3D

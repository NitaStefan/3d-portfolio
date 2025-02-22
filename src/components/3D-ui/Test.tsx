import { useThree } from "@react-three/fiber"

const Test = () => {
  const { viewport } = useThree()

  //
  const aspRatio = viewport.width / viewport.height
  const width = Math.min(10 * aspRatio, 9.8)
  const height = 5

  console.log(aspRatio)
  // return null

  return (
    <>
      <mesh position={[-width, height, 0]}>
        <torusKnotGeometry args={[1, 0.3, 32, 6, 2, 3]} />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
      <mesh position={[width, height, 0]}>
        <dodecahedronGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
      <mesh position={[-width, height, 0]} scale={0.1}>
        <dodecahedronGeometry />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
      <mesh position={[width, height, 0]} scale={0.1}>
        <dodecahedronGeometry />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
    </>
  )
}

export default Test

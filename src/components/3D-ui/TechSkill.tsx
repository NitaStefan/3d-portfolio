import { Image, Text, useTexture } from "@react-three/drei"

const TechSkill = ({
  text,
  logoURL,
  width,
  height,
  logoURL2,
}: {
  text: string
  logoURL: string
  width: number
  height: number
  logoURL2?: string
}) => {
  const matcap = useTexture("/textures/metallic.jpg")

  return (
    <mesh position={[width, height, 0]}>
      <boxGeometry args={[2.7, 0.35, 1]} />
      <meshMatcapMaterial matcap={matcap} />
      <Text
        position={[0, 0.02, 0.51]}
        fontSize={0.45}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
      {!logoURL2 ? (
        <Image
          url={logoURL}
          transparent
          scale={
            logoURL === "/images/threejs-logo.png" ||
            logoURL === "/images/sql-logo.png"
              ? 1.9
              : 2.2
          }
          position={[0, 1.125, -0.2]}
        />
      ) : (
        <>
          <Image
            url={logoURL}
            transparent
            scale={1.8}
            position={[-0.75, 1.125, -0.2]}
            rotation={[0, 0.3, 0]}
          />
          <Image
            url={logoURL2}
            transparent
            scale={1.8}
            position={[0.75, 1.125, -0.2]}
            rotation={[0, -0.3, 0]}
          />
        </>
      )}
    </mesh>
  )
}

export default TechSkill

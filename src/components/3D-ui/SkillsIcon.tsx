import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import {
  Group,
  Mesh,
  MeshMatcapMaterial,
  SRGBColorSpace,
  TextureLoader,
} from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const SkillsIcon = () => {
  const gltf = useLoader(GLTFLoader, "/models/skills.gltf")
  const matcapTexture = useLoader(TextureLoader, "/textures/green.jpg")
  const modelRef = useRef<Group | null>(null)

  // Apply material to all meshes
  useEffect(() => {
    const matcapMaterial = new MeshMatcapMaterial()
    matcapTexture.colorSpace = SRGBColorSpace
    matcapMaterial.matcap = matcapTexture

    gltf.scene.traverse(child => {
      if (child instanceof Mesh) {
        child.material = matcapMaterial
      }
    })
  }, [gltf.scene, matcapTexture])
  const height = 13.8

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        height + Math.sin(clock.getElapsedTime() * 1.5) * 0.1 + 0.03
      modelRef.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.0005
    }
  })

  return (
    <primitive ref={modelRef} object={gltf.scene} position={[1.5, height, 0]} />
  )
}

export default SkillsIcon

import { useLoader, useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { Mesh, MeshMatcapMaterial, SRGBColorSpace, TextureLoader } from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const SkillsIcon = () => {
  const { viewport } = useThree()

  const gltf = useLoader(GLTFLoader, "/skills.gltf")
  const matcapTexture = useLoader(TextureLoader, "/matcap.jpg")

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

  const aspRatio = viewport.width / viewport.height
  // const width = Math.min(10 * aspRatio)
  const width = 10 * aspRatio
  const height = 5

  return <primitive object={gltf.scene} position={[-width / 3, height, 0]} />
}

export default SkillsIcon

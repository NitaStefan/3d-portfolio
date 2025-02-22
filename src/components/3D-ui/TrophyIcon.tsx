import { useLoader } from "@react-three/fiber"
import { Mesh, MeshMatcapMaterial, SRGBColorSpace, TextureLoader } from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const TrophyIcon = () => {
  const gltf = useLoader(GLTFLoader, "/certificates.gltf")

  const matcapTexture = useLoader(TextureLoader, "/matcap6.jpg")

  const matcapMaterial = new MeshMatcapMaterial({
    matcap: matcapTexture,
  })
  matcapTexture.colorSpace = SRGBColorSpace

  gltf.scene.traverse(child => {
    if (child instanceof Mesh) {
      child.material = matcapMaterial
    }
  })

  return <primitive object={gltf.scene} />
}

export default TrophyIcon

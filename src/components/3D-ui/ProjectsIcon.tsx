import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  Group,
  Mesh,
  MeshMatcapMaterial,
  SRGBColorSpace,
  TextureLoader,
} from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const ProjectsIcon = () => {
  const gltf = useLoader(GLTFLoader, "/models/projects.gltf");
  const matcapTexture = useLoader(TextureLoader, "/textures/green.jpg");
  const modelRef = useRef<Group | null>(null);

  // Apply material to all meshes
  useEffect(() => {
    const matcapMaterial = new MeshMatcapMaterial();
    matcapTexture.colorSpace = SRGBColorSpace;
    matcapMaterial.matcap = matcapTexture;

    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = matcapMaterial;
      }
    });
  }, [gltf.scene, matcapTexture]);
  const height = 30.6;

  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        height + Math.sin(clock.getElapsedTime() * 1.5) * 0.15;
      modelRef.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.002;
      modelRef.current.rotation.x += Math.sin(clock.getElapsedTime()) * 0.001;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      position={[-2.5, height, 0]}
      rotation={[0.5, 0.55, 0]}
    />
  );
};

export default ProjectsIcon;

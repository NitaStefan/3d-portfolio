import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

const Test = () => {
  const { viewport, size } = useThree();
  const heightRef = useRef<number>(size.height);

  const aspRatio = viewport.width / viewport.height;
  // come in the middle when smaller than 9.8
  const width = Math.min(10 * aspRatio, 3);
  const height = 0;

  return null;

  return (
    <>
      <Html position={[0, 2, 0]} center>
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "5px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          <p>{heightRef.current - size.height}</p>
        </div>
      </Html>
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
  );
};

export default Test;

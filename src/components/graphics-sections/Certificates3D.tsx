import { Clone, useGLTF } from "@react-three/drei";
import CertificatesIcon from "../3D-ui/CertificatesIcon";
import Test from "../3D-ui/Test";
import { MathUtils } from "three";
import { useThree } from "@react-three/fiber";
import Spring from "../3D-ui/certificates/Spring";
import ThreejsJourney from "../3D-ui/certificates/ThreejsJourney";
import Web from "../3D-ui/certificates/Web";

const Certificates3D = () => {
  const { viewport } = useThree();
  const book = useGLTF("/models/book.gltf");

  const aspRatio = viewport.width / viewport.height;
  const width = MathUtils.clamp(10 * aspRatio, 6, 17);
  const xRotation = 1;
  const scale = MathUtils.clamp((13 * width) / 10, 1, 12);

  return (
    <>
      <CertificatesIcon />
      <Test />
      <Clone
        object={book.scene}
        scale={scale}
        position-x={-width}
        rotation-x={xRotation}
      >
        <Spring />
      </Clone>
      <Clone
        object={book.scene}
        scale={scale}
        position-z={-3}
        rotation-x={xRotation}
      >
        <ThreejsJourney />
      </Clone>
      <Clone
        object={book.scene}
        scale={scale}
        position-x={width}
        rotation-x={xRotation}
      >
        <Web />
      </Clone>
    </>
  );
};

export default Certificates3D;

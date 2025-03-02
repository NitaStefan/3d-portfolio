import { Html } from "@react-three/drei";

const ThreejsJourney = () => {
  return (
    <Html
      transform
      position={[0.05, 0.05, -0.02]}
      rotation={[-1.6, 0, 0]}
      distanceFactor={1.3}
    >
      <a
        href={"https://threejs-journey.com/certificate/view/42533"}
        target="_blank"
        className="mt-[5px] flex cursor-pointer items-center gap-x-[40px] hover:opacity-70"
      >
        <img
          src="/images/threejs-journey.png"
          alt="Udemy logo"
          width={70}
          height="auto"
        />
        <p className="ml-[-5px] w-[100px] text-lg font-medium text-black">
          Three.js Journey
        </p>
      </a>
    </Html>
  );
};

export default ThreejsJourney;

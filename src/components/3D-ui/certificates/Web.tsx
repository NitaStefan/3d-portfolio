import { Html } from "@react-three/drei";

const Web = () => {
  return (
    <Html
      transform
      position={[0.01, 0.05, -0.02]}
      rotation={[-1.6, 0, 0]}
      distanceFactor={1.3}
    >
      <a
        href={
          "https://www.udemy.com/certificate/UC-a6321d78-6c82-4b35-8489-c77aab05f4d3/"
        }
        target="_blank"
        className="flex cursor-pointer items-center hover:opacity-70"
      >
        <img
          src="/images/udemy.png"
          alt="Udemy logo"
          width={120}
          height="auto"
        />
        <p className="ml-[-5px] w-[100px] font-medium text-black">
          The Web Developer Bootcamp 2023
        </p>
      </a>
    </Html>
  );
};

export default Web;

import { Html } from "@react-three/drei";

const Spring = () => {
  return (
    <Html
      transform
      position={[-0.02, 0.05, -0.02]}
      rotation={[-1.6, 0, 0]}
      distanceFactor={1.3}
    >
      <a
        href={
          "https://www.udemy.com/certificate/UC-55c7b254-bcc2-447f-b88d-e015d5e38367/"
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
          Spring Boot 3, Spring 6 & Hibernate for Beginners
        </p>
      </a>
    </Html>
  );
};

export default Spring;

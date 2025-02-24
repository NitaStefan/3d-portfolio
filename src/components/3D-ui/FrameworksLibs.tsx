import { useThree } from "@react-three/fiber"
import TechSkill from "./TechSkill"
import { MathUtils } from "three"

const FrameworksLibs = () => {
  const { viewport } = useThree()

  const aspRatio = viewport.width / viewport.height
  const width = MathUtils.clamp(13 * aspRatio, 7.5, 20)

  const frameworksLibs = [
    { text: "Next.js", logoURL: "/images/nextjs-logo.png", width: -width },
    { text: "React.js", logoURL: "/images/react-logo.png", width: -width / 2 },
    { text: "TailwindCSS", logoURL: "/images/tailwind-logo.png", width: 0 },
    { text: "Three.js", logoURL: "/images/threejs-logo.png", width: width / 2 },
    { text: "Spring", logoURL: "/images/spring-logo.png", width: width },
  ]

  const programmingLanguages = [
    {
      text: "HTML & CSS",
      logoURL: "/images/html-logo.png",
      logoURL2: "/images/css-logo.png",
      width: (-7 / 8) * width,
    },
    {
      text: "JS & TS",
      logoURL: "/images/js-logo.png",
      logoURL2: "/images/ts-logo.png",
      width: (-2.4 / 8) * width,
    },
    {
      text: "Java",
      logoURL: "/images/java-logo.png",
      width: (2.4 / 8) * width,
    },
    { text: "SQL", logoURL: "/images/sql-logo.png", width: (7 / 8) * width },
  ]

  return (
    <>
      {frameworksLibs.map(({ text, logoURL, width }) => (
        <TechSkill
          key={text}
          text={text}
          logoURL={logoURL}
          width={width}
          height={4.5}
        />
      ))}
      {programmingLanguages.map(({ text, logoURL, width, logoURL2 }) => (
        <TechSkill
          key={text}
          text={text}
          logoURL={logoURL}
          logoURL2={logoURL2}
          width={width}
          height={-2.5}
        />
      ))}
    </>
  )
}

export default FrameworksLibs

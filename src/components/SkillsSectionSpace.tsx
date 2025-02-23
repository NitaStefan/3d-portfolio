import { SKILLS_SECTION_HEIGHT } from "../constants"

const SkillsSectionSpace = () => {
  return (
    <div
      style={{ height: `${SKILLS_SECTION_HEIGHT}px` }}
      className={` border-medium-gray relative border-[5px] flex justify-center items-center`}
    >
      <h2 className="absolute font-medium top-[20px] text-2xl text-primary bg-secondary/20 rounded-md pl-[60px] pr-[15px] py-[5px]">
        Skills
      </h2>
      <h3 className="absolute top-[140px] text-lg text-primary font-medium">
        Frameworks & Libraries
      </h3>
    </div>
  )
}

export default SkillsSectionSpace

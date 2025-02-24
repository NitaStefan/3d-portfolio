import { SKILLS_SECTION_HEIGHT } from "../constants"

const Skills = () => {
  return (
    <div
      style={{ height: `${SKILLS_SECTION_HEIGHT}px` }}
      className={` border-medium-gray relative border-[5px] flex justify-center items-center`}
    >
      <h2 className="absolute font-medium top-[20px] text-2xl text-primary bg-secondary/20 rounded-md pl-[60px] pr-[15px] py-[5px]">
        Skills
      </h2>
      <h3 className="absolute top-[120px] text-lg text-lotion font-thin">
        Frameworks & Libraries
      </h3>
      <h3 className="absolute top-[260px] text-lg text-lotion font-thin">
        Programming Languages
      </h3>
      <div className="top-[400px] absolute flex justify-around text-lg max-sm:text-base items-center w-full">
        <div>
          <h3 className="text-lotion font-thin">Frontend Development</h3>
          <ul className="mt-[10px]">
            <li className="tech-li">Responsive Design</li>
            <li className="tech-li">Data Fetching (API)</li>
            <li className="tech-li">State Management</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lotion font-thin">Backend Development</h3>
          <ul className="mt-[10px]">
            <li className="tech-li">RESTful web API</li>
            <li className="tech-li">Authentication & Security</li>
            <li className="tech-li">Object Relational Mapping</li>
          </ul>
        </div>
      </div>
      <div className="absolute top-[550px]">
        <h3 className="text-lg font-thin text-lotion text-center">
          Software Engineering Principles
        </h3>
        <ul className="mt-[10px] flex justify-around">
          <li className="tech-li">Object-oriented programming</li>
          <li className="tech-li">Data Structures and Algorithms</li>
          <li className="tech-li">SOLID Principles</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills

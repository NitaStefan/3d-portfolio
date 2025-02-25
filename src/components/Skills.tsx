import { SKILLS_SECTION_HEIGHT } from "../constants";

const Skills = () => {
  return (
    <section
      style={{ height: `${SKILLS_SECTION_HEIGHT}px` }}
      className={`relative flex items-center justify-center`}
    >
      <h2 className="text-primary bg-secondary/20 absolute top-[20px] rounded-md py-[5px] pr-[15px] pl-[60px] text-2xl font-medium">
        Skills
      </h2>
      <h3 className="text-lotion absolute top-[120px] text-lg font-thin">
        Frameworks & Libraries
      </h3>
      <h3 className="text-lotion absolute top-[260px] text-lg font-thin">
        Programming Languages
      </h3>
      <div className="absolute top-[400px] flex w-full items-center justify-around text-lg max-sm:text-base">
        <div>
          <h3 className="text-lotion font-thin">Frontend Development</h3>
          <ul className="mt-[10px]">
            <li className="tech-li">Responsive Design</li>
            <li className="tech-li">Data Fetching</li>
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
      <div className="absolute top-[550px] w-full px-[5%]">
        <h3 className="text-lotion text-center text-lg font-thin">
          Software Engineering Principles
        </h3>
        <ul className="flex justify-around gap-x-[10px]">
          <div className="grow justify-around gap-x-[10px] sm:flex">
            <li className="tech-li">Object Oriented Programming</li>
            <li className="tech-li">Data Structures and Algorithms</li>
          </div>
          <div className="grow justify-around gap-x-[10px] sm:flex">
            <li className="tech-li">Design Patterns</li>
            <li className="tech-li">SOLID Principles</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

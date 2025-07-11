import { skills } from "e:/Projects/React/portfolio/src/data/skillsData";
import SkillCategories from "../SkillCategories";
import { Element } from "react-scroll";
import SectionHeader from "../SectionHeader";

function Skills() {
  return (
    <Element name="skills">
      <section
        className=" w-full sm:w-full lg:w-7xl max-w-screen-xl   md:mx-auto mt-7 md:mt-18 gap-2  p-2 "
      >
        <SectionHeader title="Skills__" shape="triangle" color="border-b-orange-400" />
        <div className="w-full py-4 px-5 mt-9  dark:bg-gray-900">
          <SkillCategories skills={skills} />
        </div>
      </section>
    </Element>
  );
}

export default Skills;

import type { Skill } from "../types/skillTypes";
import SkillItem from "./SkillItem";

interface Props {
  skills: Skill[];
}

function SkillCategories({ skills }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </>
  );
}

export default SkillCategories;

import type { Skill } from "../types/skillTypes";
interface Props {
    skill:Skill
}
function SkillItem({ skill }: Props) {
  return (
    <div key={skill.name} className="flex flex-col gap-2 py-4  items-center transition transform hover:shadow-lg hover:scale-110 duration-300 rounded-2xl bg-gray-200 dark:bg-gray-800 shadow-md" >
      <img src={skill.logo} alt={skill.name} className="w-14 h-14 object-contain" />
      <span className="mt-1 text-sm text-center font-semibold text-gray-800 dark:text-white">{skill.name}</span>
    </div>
  );
}

export default SkillItem;

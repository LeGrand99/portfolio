import { skills } from "../../data/skillsData";
import SkillCategories from "../SkillCategories";
import { Element } from "react-scroll";
import SectionHeader from "../SectionHeader";
import { RefreshCcw, ShieldCheck, UserCheck2, Users2, Zap } from "lucide-react";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t} = useTranslation();
  return (
    <Element name="skills">
      <section className=" w-full sm:w-full  mt-7 md:mt-18 p-2 overflow-hidden dark:bg-gray-900">
        <SectionHeader
          title={`${t("sectionTitle.skill")}`}
          shape="triangle"
          color="text-orange-400"
          text={`${t("sectionDescription.skill")}`}
        />
        <div className="w-full py-4 px-5 mt:4 sm:mt-6 lg:w-[75%] mx-auto dark:bg-gray-900">
          <SkillCategories skills={skills} />
          <div className="mt-14 md:mt-20">
            <p className="text-center  w-full md:w-[70%] mx-auto text-xl sm:text-2xl  text-gray-500 dark:text-gray-400" data-aos="fade-right">
              {t("softSkillsIntro")}
            </p>
            <div className="grid grid-cols-1  place-items-center gap-y-3  md:grid-cols-2 lg:grid-cols-3  lg:gap-3 mx-auto mt-8  w-full ">
              <div className="soft-skill-container" data-aos="zoom-in">
                <UserCheck2 className="text-blue-600" />
                <p className="soft-skill-content  ">{t("softSkills.autonomy")}</p>
              </div>
              <div className="soft-skill-container" data-aos="zoom-in">
                <Users2 className="text-indigo-800 dark:text-indigo-500" />
                <p className="soft-skill-content">{t("softSkills.teamwork")}</p>
              </div>
              <div className="soft-skill-container" data-aos="zoom-in">
                <Zap className="text-yellow-400" />
                <p className="soft-skill-content  ">{t("softSkills.fastLearning")}</p>
              </div>
              <div className="soft-skill-container" data-aos="zoom-in">
                <IoExtensionPuzzleOutline className="w-6.5 h-6.5 text-red-500" />
                <p className="soft-skill-content ">{t("softSkills.problemSolving")}</p>
              </div>
              <div className="soft-skill-container" data-aos="zoom-in">
                <RefreshCcw className="text-amber-800 dark:text-amber-600" />
                <p className="soft-skill-content  ">{t("softSkills.adaptability")}</p>
              </div>
              <div className="soft-skill-container" data-aos="zoom-in">
                <ShieldCheck className="text-teal-600" />
                <p className="soft-skill-content">{t("softSkills.rigour")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Skills;

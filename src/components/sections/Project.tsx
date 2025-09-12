import SectionHeader from "../SectionHeader";
import ProjectCard from "../ProjectCard";
import { projectsFR } from "../../data/projectsData";
import { projectsEN } from "../../data/projectsData";
import { TbBrightnessOff } from "react-icons/tb";
import { TbBrightnessFilled } from "react-icons/tb";
import { useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import type { project } from "../../types/projectTypes";
import AOS from "aos"
import { useEffect } from "react";

function Project() {
  const { t, i18n } = useTranslation();
  const projects = i18n.language === "fr" ? projectsFR : projectsEN;
  const categories = [`${t("all")}`, "Web", "Mobile"];
  const [BlacknWhite, setBlacknWhite] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(`${t("all")}`);
 
  const visibleProjects = projects.filter((project) => {
    if (
      project.category !== selectedCategory &&
      selectedCategory !== "All" &&
      selectedCategory !== "Tous"
    ) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    AOS.refresh()
  },[visibleProjects]);
  return (
    <Element name="projects" className="dark:bg-gray-700">
      <section className=" w-full sm:w-full  mt-7 md:mt-18 py-5 px-5 overflow-hidden dark:bg-gray-900">
        <SectionHeader
          title={`${t("sectionTitle.projects")}`}
          shape="square"
          color="text-indigo-500"
          text={`${t("sectionDescription.projects")}`}
        />
        <div className="mt-4 lg:w-[85%] md:mx-auto ">
          <div className="flex items-center justify-center mx-auto" data-aos="flip-left">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  category === selectedCategory ||
                  (selectedCategory === "Tous" && category == "All") ||
                  (selectedCategory === "All" && category == "Tous")
                    ? "bg-blue-700 text-zinc-50"
                    : ""
                } border border-gray-300 dark:border-gray-600   w-[85px] sm:w-[110px] py-1  text-center font-semibold text-gray-700 cursor-pointer dark:text-gray-300 `}
              >
                {category}
              </div>
            ))}
            <div className=" ml-3 sm:ml-5 cursor-pointer animate-bounce dark:text-gray-100 hidden md:block lg:inline-block">
              {BlacknWhite ? (
                <TbBrightnessOff onClick={() => setBlacknWhite(!BlacknWhite)} />
              ) : (
                <TbBrightnessFilled onClick={() => setBlacknWhite(!BlacknWhite)} />
              )}
            </div>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 md:gap-5 lg:gap-10 mt-12"
            data-aos="fade-up"
          >
            {visibleProjects.map((project:project) => (
              <ProjectCard key={project.id} project={project} BnW={BlacknWhite} />
            ))}
          </div>
          <a href="https://github.com/soaviniavo" target="_blank" rel="noopener noreferrer">
            <div
              className="mx-auto mt-7 md:mt-9 border border-gray-300  w-[120px] py-1  text-center font-semibold text-gray-700 cursor-pointer hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:text-gray-300  "
              data-aos="flip-left"
            >
              {t("seeMore")}
            </div>
          </a>
        </div>
      </section>
    </Element>
  );
}

export default Project;

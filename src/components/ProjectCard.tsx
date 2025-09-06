import { Code, ExternalLink } from "lucide-react";
import type { project } from "../types/projectTypes";
import type { Tech } from "../types/projectTypes";
import ProjectLink from "./ProjectLink";

interface Props {
  project: project;
  BnW: boolean;
}

function ProjectCard({ project, BnW }: Props) {
  return (
    <div className="group shadow-md rounded-xl overflow-hidden mb-5 transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
      <div className="relative w-full overflow-hidden ">
        <img
          src={project.image}
          alt="project"
          className={`${
            BnW ? "md:grayscale md:group-hover:grayscale-0" : ""
          } w-full h-50 md:h-80 object-cover  transition duration-300 ease-in-out md:filter  md:group-hover:scale-105 `}
        />
        {project.linkDemo && (
          <ProjectLink version="web" link={project.linkDemo} Icon={ExternalLink} />
        )}
        {project.code && <ProjectLink version="web" link={project.code} Icon={Code} />}
      </div>

      <div className="flex flex-col gap-1 py-4 px-6">
        <h1 className="text-sm md:text-md font-medium uppercase mt-2 group-hover:text-indigo-700 dark:text-gray-200 dark:group-hover:text-purple-400">
          {project.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-4 mt-3">
          {project.tech.map((tech: Tech) => (
            <div
              className="text-[13px] font-semibold text-gray-600 bg-gray-200 rounded-xl px-3 md:px-4 py-1 dark:bg-gray-800 dark:text-gray-300 "
              key={tech.name}
            >
              {tech.name}
            </div>
          ))}
        </div>
        {project.linkDemo && (
          <ProjectLink type="Demo" version="mobile" link={project.linkDemo} Icon={ExternalLink} />
        )}
        {project.code && (
          <ProjectLink type="Code" version="mobile" link={project.code} Icon={Code} />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

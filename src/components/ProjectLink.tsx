import React from "react";
type Version = "mobile" | "web";
type Type = "Demo" | "Code";
interface Props {
  link: string;
  Icon: React.ElementType;
  version: Version;
  type?: Type;
}
function ProjectLink({ link, Icon, version, type }: Props) {
  if (version === "web") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 hover:cursor-pointer right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center"
      >
        <Icon />
      </a>
    );
  } else {
    return (
      <a
        className="flex gap-5 cursor-pointer md:cursor-auto py-1 px-2 md:p-0 items-center justify-center text-white bg-indigo-700 rounded-lg mt-3 md:mt-0 md:opacity-0 "
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {type === "Demo" ? (
          <button className="inline-flex gap-2">
            {type} <Icon />
          </button>
        ) : (
          <button className="inline-flex gap-2">
            {type} <Icon />
          </button>
        )}
      </a>
    );
  }
}

export default ProjectLink;

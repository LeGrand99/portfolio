import React from "react";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaSquare } from "react-icons/fa6";

type ShapeType = "circle" | "triangle" | "square";

interface Props {
  title: string;
  shape: ShapeType;
  color: string; // exemple: text-green-500
  text:string;
}

function SectionHeader({ title, shape, color,text }: Props) {
  const shapeClass = (shape: ShapeType, color: string): React.ReactNode => {
    switch (shape) {
      case "circle":
        return <FaCircle className={`w-0 h-0 sm:w-7 sm:h-7 mt-1 ${color}`} />
      case "triangle":
        return <IoTriangle className={`w-0 h-0 sm:w-7 sm:h-7 mt-1 ${color}`} />
      case "square":
        return <FaSquare className={`w-0 h-0 sm:w-7 sm:h-7 mt-1 ${color}`} />
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col  gap-4 justify-center  py-10 px-1 w-full lg:w-2/3 mx-auto ">
      <div className="flex flex-col items-center justify-center gap-4  " data-aos="fade-left">
        <div className="flex items-center gap-3  lg:mr-5  " >
          {shapeClass(shape, color)}
          <h1 className="text-center text-3xl md:text-5xl font-medium text-shadow-gray-700 text-gray-800 dark:text-gray-200 " >
            {title}
          </h1>
        </div>
        <div className={`h-1 w-[26%] ml-3 sm:h-0 sm:w-0 sm:absolute bg-orange-400`}></div>
      </div>
      <p className="text-center  w-full md:w-[70%] mx-auto text-xl sm:text-2xl  text-gray-500 dark:text-gray-400" data-aos="fade-left" data-aos-delay="100">
        {text}
      </p>
    </div>
  );
}

export default SectionHeader;

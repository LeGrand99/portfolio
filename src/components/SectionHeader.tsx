import React from "react";
type ShapeType = "circle" | "triangle" | "square";

interface Props {
  title: string;
  shape: ShapeType;
  color: string; // exemple: if circle : bg-red-400 / if triangle : border-b-green-500 / if square : bg-green-500
}

function SectionHeader({ title, shape, color }: Props) {
  const shapeClass = (shape: ShapeType, color: string): React.ReactNode => {
    switch (shape) {
      case "circle":
        return <span className={`inline-block w-7 h-7 mt-2 ${color} rounded-full `} />;
      case "triangle":
        return (
          <span
            className={`
            inline-block
            w-1 h-1
            mt-1
            border-l-[14px] border-l-transparent
            border-r-[14px] border-r-transparent
            border-b-[25px] ${color}
            mr-2
        `}
          />
        );
      case "square":
        return <span className={`w-6 h-6 rounded-sm mt-2 ${color}`}></span>;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col  gap-4 justify-center  py-10 px-1 w-full lg:w-2/3 mx-auto ">
      <div className="flex flex-col items-center justify-center gap-4  ">
        <div className="flex items-center  gap-5 mr-7  md:mr-14">
          {shapeClass(shape, color)}
          <h1 className="text-4xl md:text-5xl font-medium text-shadow-gray-700 text-gray-800 ">
            {title}
          </h1>
        </div>
      </div>
      <p className="text-center text-lg text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, nemo!
      </p>
    </div>
  );
}

export default SectionHeader;

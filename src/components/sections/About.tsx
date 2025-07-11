import {  UserCircle2 } from "lucide-react";

function About() {
  return (
    <section id="about" className=" w-full sm:w-full lg:w-7xl max-w-screen-xl   md:mx-auto mt-7 md:mt-18 gap-2  p-2 ">
      <div className="flex gap-4 items-center ">
        <UserCircle2 size={40} className="text-stone-600" />
        <h1 className="text-4xl font-semibold text-gray-700 ">About</h1>
      </div>
    </section>
  );
}

export default About;

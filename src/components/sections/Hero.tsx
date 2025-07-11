import gitBlack from "../../assets/skills/github-142-svgrepo-com.svg";
import linkedin from "../../assets/linkedin.svg";
import { ChevronDown, Download } from "lucide-react";
import Button from "../core/Button";
import ButtonWithIcon from "../core/ButtonWithIcon";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-full  lg:w-2/3 max-w-screen-xl mx-auto mt-10 md:mt-25 gap-2  p-2 dark:bg-gray-900"
    >
      <h1 className="text-4xl text-center font-semibold text-gray-700 ">Soavin'i Avo .R</h1>
      <h2 className="text-2xl  text-center font-semibold mb-4 text-gray-700 ">
        Developpeur web - Odoo
      </h2>
      <p className="md:text-lg font-sans text-gray-800 text-center px-2 dark:text-white mb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repellendus aut consequatur
        dolore pariatur commodi praesentium recusandae debitis impedit. Ducimus.
      </p>
      <div className="flex gap-3 items-center mb-7">
        <img
          src={gitBlack}
          className="w-9 h-9 rounded-full cursor-pointer transition transform hover:scale-110 duration-300"
          alt="github"
        />
        <img
          src={linkedin}
          className="w-11 h-11  cursor-pointer transition transform hover:scale-110 duration-300"
          alt="Linkedin"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center md:gap-2">
        <ButtonWithIcon
          value="Voir mes projets"
          icon_size={20}
          Icon={ChevronDown}
          color="blue"
          iconPosition="right"
        />
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={500}
          offset={-100}
        >
           <Button value="Me contacter" />
        </Link>
        <ButtonWithIcon
          value="Telecharger CV"
          icon_size={20}
          Icon={Download}
          color="red"
          iconPosition="left"
        />
      </div>

      <div className="flex justify-center mt-55 md:mt-60">
        <ChevronDown className="w-8 h-8 text-blue-500 animate-bounce" />
      </div>
    </section>
  );
}

export default Hero;

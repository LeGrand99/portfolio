import gitBlack from "../../assets/skills/github-142-svgrepo-com.svg";
import linkedin from "../../assets/linkedin.svg";
import { ChevronDown, Download } from "lucide-react";
import Button from "../core/Button";
import ButtonWithIcon from "../core/ButtonWithIcon";
import { Link } from "react-scroll";
import profil from "../../assets/profil.jpg";
import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";
import { LuGithub } from "react-icons/lu";
import { useTheme } from "../../context/ThemeContext";

function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section id="home" className="w-full py-5 px-5 dark:bg-gray-900">
      <div className="flex flex-col w-full gap-20  md:flex-row lg:w-[70%] items-center justify-center space-x-40 mt-15 md:mt-35  mx-auto  ">
        <div className="w-full md:w-[60%] space-y- order-1 md:order-0 mx-auto">
          <h1 className=" text-4xl text-center lg:text-left  md:text-6xl  font-semibold  text-gray-800 dark:text-gray-100">
            Soavin'i Avo .R
          </h1>
          <h2 className="text-2xl text-center lg:text-left md:text-4xl font-semibold mb-5 bg-gradient-to-r from-blue-900 via-pink-600  bg-clip-text text-transparent z-11">
            <ReactTyped
              strings={[`${t("webDeveloper")}`]}
              className="typed-cursor-fix"
              cursorChar="|"
              typeSpeed={40}
            />
          </h2>
          <p className=" text-lg md:text-2xl font-sans text-center lg:text-left text-gray-800  dark:text-gray-400 mb-4">
            {t("intro")}
          </p>
          <div className="flex gap-3 items-center justify-center lg:justify-normal mb-7">
            {theme === "light" ? (
              <a href="https://github.com/soaviniavo" target="_blank" rel="noopener noreferrer">
                <img
                  src={gitBlack}
                  className="w-9.5 h-9.5  cursor-pointer transition transform hover:scale-110 duration-100"
                  alt="Git"
                />
              </a>
            ) : (
              <a href="https://github.com/soaviniavo" target="_blank" rel="noopener noreferrer">
                <LuGithub className="w-9 h-9 text-white" />
              </a>
            )}
            <a href="">
              <img
                src={linkedin}
                className="w-12 h-12  cursor-pointer transition transform hover:scale-110 duration-100"
                alt="Linkedin"
              />
            </a>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-normal gap-3 lg:gap-5">
            <Link to="projects" smooth={true} spy={true} duration={500} offset={-100}>
              <ButtonWithIcon
                value={`${t("viewProjects")}`}
                icon_size={20}
                Icon={ChevronDown}
                color="blue"
                iconPosition="right"
              />
            </Link>
            <Link to="contact" smooth={true} spy={true} duration={500} offset={-100}>
              <Button value={`${t("contactMe")}`} />
            </Link>
            <ButtonWithIcon
              value={`${t("download")}`}
              icon_size={19}
              Icon={Download}
              color="red"
              iconPosition="left"
            />
          </div>
        </div>
        <div className="relative w-[200px] h-[200px] md:mr-5 lg:mr-0 md:w-[220px] md:h-[220px] lg:w-[276px] lg:h-[276px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-300 via-indigo-400 to-purple-500 blur-xl opacity-100 animate-pulse"></div>

          <img
            src={profil}
            alt="profil"
            className="relative rounded-full w-full h-full object-cover object-[50%_5%]"
          />

          <div
            className="hero-img-icon absolute -top-10 -right-2 text-2xl"
            style={{ animationDuration: "4s" }}
          >
            <span>🚀</span>
          </div>
          <div
            className="hero-img-icon absolute -bottom-10 -left-5 text-2xl"
            style={{ animationDuration: "4s" }}
          >
            <span>💻</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-30 md:mt-55">
        <ChevronDown className="w-8 h-8 text-purple-500 animate-bounce" />
      </div>
    </section>
  );
}

export default Hero;

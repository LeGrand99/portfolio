import SectionHeader from "../SectionHeader";
import { FaBuilding } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import logo from "../../assets/logoGray.svg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section
      id="education"
      className=" w-full sm:w-full  mt-7 md:mt-18 gap-2  p-2 overflow-hidden dark:bg-gray-900 "
    >
      <SectionHeader
        title={`${t("sectionTitle.education")}`}
        shape="circle"
        color="text-teal-400"
        text={`${t("sectionDescription.education")}`}
      />
      <div className="flex flex-col space-y-8 relative px-5  lg:w-[80%]  mx-auto mt-5 md:my-10">
        <div className="absolute w-2 z-0 h-full bg-gray-200   inset-0 left-8.5 md:mx-auto md:right-0 md:left-0 dark:bg-gray-700"></div>
        <div className="relative z-10 ">
          <img src={logo} className="timeline-img " alt="Logo" />
          <div className="timeline-container timeline-container-left " data-aos="fade-right">
            <div
              className="timeline-pointer timeline-pointer-left bg-[#b6c3fd] md:bg-indigo-300"
              aria-hidden="true"
              data-aos="fade-right"
            ></div>
            <div className=" timeline-card bg-gradient-to-tr from-indigo-200 to-indigo-300 hover:shadow-indigo-200  ">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between mb-2 ">
                  <div className="p-2  rounded-lg">
                    <FaGraduationCap className="h-10 w-10 text-indigo-700 " />
                  </div>
                  <div className="flex gap-3 items-center">
                    <MdDateRange className="h-6 w-6 text-gray-600" />
                    <time dateTime="2022-10-21" className="timelineCard-date">
                      2024-2025
                    </time>
                  </div>
                </div>
                <h1 className="text-gray-700 text-center text-xl  sm:text-2xl  font-semibold">
                  {t("masterOngoing")}
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex gap-2 items-center   lg:ml-7">
                    <FaUniversity className="h-5 w-5 sm:h-4 sm:w-4 text-slate-600 " />
                    <a href="https://ispm-edu.com/" target="_blank" rel="noopener noreferrer" className=" text-slate-600 hover:underline cursor-pointer text-[15px] sm:text-[16px] font-medium">
                      {t("schoolName")}
                    </a>
                  </div>
                  <p className="text-slate-600 lg:ml-7 text-[15px] font-medium">
                    <span className="underline">{t("Specialization")}</span>
                    {" :"} {t("degreeOption")}
                  </p>
                </div>
                <div className="flex flex-col  lg:ml-7">
                  <h2 className="font-semibold text-indigo-600">{t("keySubject")} :</h2>
                  <div className="flex flex-wrap space-x-3">
                    <p className="timeline-key-subject border-indigo-500">
                      {t("softwareEngineering")}
                    </p>
                    <p className="timeline-key-subject border-indigo-500">{t("rna")}</p>
                    <p className="timeline-key-subject border-indigo-500">{t("dataStructures")} </p>
                    <p className="timeline-key-subject border-indigo-500">{t("ai")}</p>
                    <p className="timeline-key-subject border-indigo-500">{t("dbms")}</p>
                    <p className="timeline-key-subject border-indigo-500">{t("statistics")}</p>
                    <p className="timeline-key-subject border-indigo-500">{t("economics")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 ">
          <img src={logo} className="timeline-img " alt="Logo" />
          <div className="timeline-container " data-aos="fade-left">
            <div
              className="timeline-pointer  bg-teal-100"
              aria-hidden="true"
              data-aos="fade-left"
            ></div>
            <div className="timeline-card bg-gradient-to-tr from-teal-200 to-green-100 hover:shadow-teal-100 ">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between mb-2 ">
                  <div className="p-2  rounded-lg">
                    <FaGraduationCap className="h-10 w-10 text-emerald-700 " />
                  </div>
                  <div className="flex gap-3 items-center">
                    <MdDateRange className="h-6 w-6 text-gray-600" />
                    <time dateTime="2022-10-21" className="timelineCard-date">
                      2018-2022
                    </time>
                  </div>
                </div>
                <h1 className="text-gray-700 text-center text-xl  sm:text-2xl  font-semibold">
                  {t("bachelorDegree")}
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex gap-2 items-center  lg:ml-7">
                    <FaUniversity className="h-5 w-5 sm:h-4 sm:w-4 text-slate-600 " />
                    <a className=" text-slate-600 hover:underline cursor-pointer text-[15px] sm:text-[16px] font-medium" href="https://ispm-edu.com/" target="_blank" rel="noopener noreferrer">
                      {t("schoolName")}
                    </a>
                  </div>
                  <p className="text-slate-600 lg:ml-7 text-[15px] font-medium">
                    <span className="underline">{t("Specialization")}</span>
                    {" :"} {t("degreeOption")}
                  </p>
                </div>
                <div className="flex flex-col  lg:ml-7">
                  <h2 className="font-semibold text-teal-700">{t("keySubject")} :</h2>
                  <div className="flex flex-wrap space-x-3">
                    <p className="timeline-key-subject border-teal-500">
                      {t("softwareEngineering")}
                    </p>
                    <p className="timeline-key-subject border-teal-500">{t("dbms")}</p>
                    <p className="timeline-key-subject border-teal-500">{t("dataStructures")} </p>
                    <p className="timeline-key-subject border-teal-500">{t("networks")}</p>
                    <p className="timeline-key-subject border-teal-500">{t("mathematics")}</p>
                    <p className="timeline-key-subject border-teal-500">{t("statistics")}</p>
                    <p className="timeline-key-subject border-teal-500">{t("economics")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 ">
          <img src={logo} className="timeline-img" alt="LogoISPM" />
          <div className="timeline-container timeline-container-left " data-aos="fade-right">
            <div
              className="timeline-pointer bg-[#fdb8b8] md:bg-red-300 timeline-pointer-left"
              aria-hidden="true"
              data-aos="fade-right"
            ></div>
            <div className="timeline-card bg-gradient-to-tr from-orange-200 to-red-300 hover:scale-105  hover:shadow-red-100 ">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between mb-2 ">
                  <div className="p-2 rounded-lg">
                    <BsPersonWorkspace className="h-10 w-10 text-rose-500 " />
                  </div>
                  <div className="flex gap-3 items-center">
                    <MdDateRange className="h-6 w-6 text-gray-600" />
                    <time dateTime="2022-04-02" className="timelineCard-date">
                      04/2022 - 07/2022
                    </time>
                  </div>
                </div>
                <h1 className="text-gray-700 text-center text-xl  sm:text-2xl  font-semibold">
                  {t("internshipTitle")}
                </h1>
                <div className="flex flex-col gap-2 mt-3.5">
                  <div className="flex gap-3 items-center  lg:ml-7">
                    <FaBuilding className="h-4 w-4 text-slate-600 " />
                    <a className=" text-slate-600 hover:underline cursor-pointer text-[15px] sm:text-[16px] font-medium" href="https://www.caissedepargne.mg/" target="_blank" rel="noopener noreferrer">
                      {t("savingsBank")}
                    </a>
                  </div>
                  <p className="text-slate-600  lg:ml-7 text-[15px] font-medium">
                    
                    {t("projectDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { ChevronUpCircle, Download, PhoneCall } from "lucide-react";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import ButtonWithIcon from "../core/ButtonWithIcon";
import SectionHeader from "../SectionHeader";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import EmailForm from "../EmailForm";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className=" w-full sm:w-full mt-7 md:mt-18  py-5 px-5 overflow-hidden dark:bg-gray-900"
    >
      <SectionHeader
        title={`${t("sectionTitle.contact")}`}
        shape="square"
        color="text-pink-500"
        text={t("sectionDescription.contact")}
      />
      <div className="flex flex-col justify-center gap-12  lg:w-[72%] mx-auto lg:flex-row mt:9 sm:mt-12 ">
        <div
          className="  w-full sm:w-[92%] sm:mx-auto md:w-[75%] lg:w-[60%] border border-gray-200 dark:border-gray-600  py-7 px-5 md:mx-auto md:py-7 md:px-9 rounded-xl shadow-md md:shadow-lg"
          data-aos="fade-right"
        >
          <h1 className="text-lg md:text-xl font-semibold text-center text-gray-700 dark:text-gray-300">
            {t("availability")}
          </h1>
          <EmailForm />
        </div>
        <div
          className="grid grid-cols-1 gap-8 sm:w-[70%] sm:mx-auto md:gap-4 md:w-[70%] lg:w-[35%]  md:mx-auto md:mt-5 "
          data-aos="fade-left"
        >
          <div className="contact-info-container">
            <FiMail className="contact-icon w-6 h-6 flex-shrink-0" />
            <div className="flex flex-col md:gap-1">
              <span className="contact-info-title">Email</span>
              <a href="mailto:rakotonirinasoaviniavo01@gmail.com" className="contact-info-link">
                rakotonirinasoaviniavo01@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-info-container">
            <PhoneCall className="contact-icon " />
            <div>
              <span className="contact-info-title ">{t("phone")}</span>
              <p className="text-lime-700 font-semibold dark:text-lime-500">+261 34 67 588 39</p>
            </div>
          </div>

          <div className="contact-info-container ">
            <IoLocationOutline className="contact-icon  w-6 h-6" />
            <div>
              <span className="contact-info-title">{t("address")}</span>
              <p className="text-sm  font-normal dark:text-gray-300">
                Itaosy Antananarivo, Madagascar
              </p>
            </div>
          </div>
          <div className="contact-info-container">
            <FiLinkedin className="contact-icon  w-6 h-6" />
            <div className="flex flex-col  md:gap-1">
              <span className="contact-info-title">LinkedIn</span>
              <a className="contact-info-link">linkedin.com/in/soaviniavo-rakotonirina</a>
            </div>
          </div>

          <div className="flex  items-center justify-center ">
            <ButtonWithIcon
              value={`${t("download")} `}
              iconPosition="left"
              icon_size={20}
              Icon={Download}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-35 md:mt-30 ">
        <Link to="home" smooth={true} spy={true} duration={500} offset={-200}>
          <ChevronUpCircle className="w-8 h-8 text-indigo-600 animate-pulse cursor-pointer dark:text-purple-600" />
        </Link>
      </div>
    </section>
  );
}

export default Contact;

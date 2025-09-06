import { Mail } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import logo from "../assets/Icon.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-gray-900 w-full mt-7 py-14">
      <div className="flex flex-col sm:flex-row lg:flex-row gap-4 justify-between items-center w-[80%] mx-auto border-b border-gray-700 pb-7 mb-9">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="logo" className="w-7 h-7" />
            <p className="text-white text-2xl ">Soavina .A</p>
          </div>
          <p className="text-gray-400 text-md mb-3 ">{t("codeQuote")}</p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.facebook.com/niavo.jovonldo" target="_blank" rel="noopener noreferrer">
            <div className="footer-icon">
              <FiFacebook className="w-6 h-6 text-white" />
            </div>
          </a>
          <a href="https://github.com/soaviniavo" target="_blank" rel="noopener noreferrer">
            <div className="footer-icon">
              <LuGithub className="w-6 h-6 text-white" />
            </div>
          </a>
          <a href="">
            <div className="footer-icon">
              <SlSocialLinkedin className="w-6 h-6 text-white" />
            </div>
          </a>
          <a href="mailto:rakotonirinasoaviniavo01@gmail.com">
            <div className="footer-icon">
              <Mail color="white" />
            </div>
          </a>
        </div>
      </div>
      <p className="text-gray-400  text-center text-md">
        © 2025 Soaviniavo. {t("allRightsReserved")}.
      </p>
    </div>
  );
}

export default Footer;

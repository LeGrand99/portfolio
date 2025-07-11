import { ChevronUpCircle, Download } from "lucide-react";
import linkedInLogo from "../../assets/linkedin.svg";
import gmailIcon from "../../assets/Gmail_icon.png";
import phoneIcon from "../../assets/phone.png";
import addressIcon from "../../assets/address.png";
import ButtonWithIcon from "../core/ButtonWithIcon";
import SectionHeader from "../SectionHeader";
import { Link } from "react-scroll";
import { Send } from "lucide-react";
import Input from "../core/Input";
import TextArea from "../core/TextArea";

function Contact() {
  return (
    <section
      id="contact"
      className=" w-full sm:w-full lg:w-7xl max-w-screen-xl  md:mx-auto mt-7 md:mt-18 gap-2  py-5 px-5"
    >
      <SectionHeader title="Me contacter ?" shape="circle" color="bg-indigo-500" />
      <div className="flex flex-col justify-center gap-15 lg:flex-row mt-15">
        <div className="  w-full md:w-[55%] border border-gray-200  py-7 px-5 md:py-7 md:px-9 rounded-xl">
          <h1 className="text-lg md:text-xl font-semibold text-center text-gray-700">
            Vous cherchez quelqu'un de motivé,sérieux et prêt à s'investir ? Contactez-moi !
          </h1>
          <div className="mt-9">
            <div className="flex flex-col md:flex-row gap-6 mb-5">
              <Input
                value=""
                className="w-[100%] md:w-[60%]"
                placeholder="Votre Nom"
                onChange={() => {}}
              />
              <Input
                value=""
                className="w-[100%] md:w-[60%]"
                placeholder="votre.email@exemple.com"
                onChange={() => {}}
              />
            </div>
            <Input value="" className="w-[100%]" placeholder="Sujet" onChange={() => {}} />
            <div className=" flex flex-col items-start w-[100%] mx-auto mt-6 md:mt-8">
              <TextArea rows={6} placeholder="Message..." />
              <ButtonWithIcon
                value="Envoyer"
                icon_size={19}
                Icon={Send}
                color="blue"
                iconPosition="right"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-4">
          <div className="flex gap-6 items-center border border-gray-200 py-3 md:py-0 px-6 rounded-xl">
            <img src={gmailIcon} className="w-5 h-5  " alt="" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-800 ">Email</span>
              <a
                href="#"
                className="text-blue-600 text-sm font-semibold cursor-pointer underline "
              >
                rsoaviniavo@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-5  items-center border border-gray-200 py-3 md:py-0 px-6 rounded-xl">
            <img src={phoneIcon} className="w-6 h-6 " alt="" />
            <div>
              <span className="text-sm font-medium text-gray-800 ">Téléphone</span>
              <p className="text-lime-700 font-semibold">+261 34 67 588 39</p>
            </div>
          </div>
          <div className="flex gap-5  items-center border border-gray-200 py-3 md:py-0 px-6 rounded-xl ">
            <img src={addressIcon} className="w-6 h-6 " alt="" />
            <div>
              <span className="text-sm font-medium text-gray-800">Adresse</span>
              <p className="text-sm font-semibold">Antananarivo, Madagascar</p>
            </div>
          </div>
           <div className="flex gap-5  items-center border  border-gray-200 py-3 md:py-0 px-6 rounded-xl">
            <img src={linkedInLogo} className="w-6 h-6  " alt="" />
            <div className="flex flex-col  md:gap-1">
              <span className="text-sm font-medium text-gray-800">LinkedIn</span>
              <a className="text-blue-600 text-sm font-semibold cursor-pointer underline ">
                linkedin.com/in/soaviniavo-rakotonirina
              </a>
            </div>
          </div>
          <div className="flex  items-center justify-center">
            <ButtonWithIcon
              value="Télecharger CV"
              iconPosition="left"
              icon_size={20}
              Icon={Download}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-35 md:mt-30 ">
        <Link to="home" smooth={true} spy={true} duration={500} offset={-200}>
          <ChevronUpCircle className="w-8 h-8 text-indigo-600 animate-pulse cursor-pointer" />
        </Link>
      </div>
    </section>
  );
}

export default Contact;

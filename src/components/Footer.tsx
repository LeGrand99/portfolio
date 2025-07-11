
import gitWhite from "../assets/github.png";
import linkedinWhite from "../assets/linkedin.png";
import emailWhite from "../assets/email.png";


function Footer() {
  return (
    <div className="flex flex-col bg-gray-900 w-full mt-7 py-14">
      <div className="flex flex-col sm:flex-row lg:flex-row gap-4 justify-between items-center w-[80%] mx-auto border-b border-gray-700 pb-7 mb-9">
        <div>
          <p className="text-white text-2xl mb-2">Soavina .A</p>
          <p className="text-gray-400 text-md mb-3 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, sapiente.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="border border-gray-500 rounded-lg bg-gray-800 p-[1px] cursor-pointer transition transform hover:scale-110 duration-300">
            <svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.67 24h3.4l.53-4h-3.93v-2.57c0-1.16.32-1.95 2-1.95h2.13V11.5c-.37-.05-1.63-.16-3.1-.16-3.07 0-5.17 1.88-5.17 5.34V20h-3.47v4h3.47v10h4.17V24z"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="border border-gray-500 rounded-lg bg-gray-800 p-2 cursor-pointer transition transform hover:scale-110 duration-300">
            <img
              src={gitWhite}
              className="w-4 h-4  cursor-pointer transition transform hover:scale-110 duration-300"
              alt="github"
            />
          </div>
           <div className="border border-gray-500 rounded-lg bg-gray-800 p-2 cursor-pointer transition transform hover:scale-110 duration-300">
            <img
              src={linkedinWhite}
              className="w-4 h-4  "
              alt="github"
            />
          </div>
           <div className="border border-gray-500 rounded-lg bg-gray-800 p-2 cursor-pointer transition transform hover:scale-110 duration-300">
            <img
              src={emailWhite}
              className="w-4 h-4  cursor-pointer transition transform hover:scale-110 duration-300"
              alt="github"
            />
          </div>
        </div>
      </div>
      <p className="text-gray-400  text-center text-md">© 2025 Soaviniavo. Tous droits réservés.</p>
    </div>
  );
}

export default Footer;

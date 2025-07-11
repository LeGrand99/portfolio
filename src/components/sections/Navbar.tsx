import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import frenchflag from "../../assets/french-flag.svg";
import englishflag from "../../assets/english-flag.svg";

function Navbar() {
  const [isDropDownLanguageOpen, setIsDropDownLanguageOpen] = useState<boolean>(false);
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Français");
  const handleDropDownLanguage = () => setIsDropDownLanguageOpen(!isDropDownLanguageOpen);
  const handleDropDownMenu = () => setIsDropDownMenuOpen(!isDropDownMenuOpen);

  return (
    <>
      <nav className="sticky top-0 z-50  bg-white/70 backdrop-blur-md border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a className="flex items-center space-x-3 ">
            <span className="self-center text-2xl  bg-gradient-to-r from-blue-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold whitespace-nowrap dark:bg-gradient-to-r dark:from-blue-400 dark:via-pink-500 dark:to-red-500 dark:bg-clip-text dark:text-transparent">
              Soavina .A
            </span>
          </a>
          <div className="flex items-center md:flex-col md:order-2 space-x-1 md:space-x-0 ">
            <button
              type="button"
              onClick={handleDropDownLanguage}
              className="inline-flex  items-center gap-2 font-medium justify-center  px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {selectedLanguage === "Français" ? (
                <img src={frenchflag} alt="French-flag" />
              ) : (
                <img src={englishflag} className="w-5 h-5" alt="English-flag" />
              )}
              {selectedLanguage}
            </button>

            {isDropDownLanguageOpen && (
              <div className="z-50 absolute   mt-38 md:mt-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                <ul className="py-2 font-medium" role="none">
                  <li
                    onClick={() => {
                      setSelectedLanguage("English");
                      setIsDropDownLanguageOpen(false);
                    }}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center gap-2">
                        <img src={englishflag} className="w-5 h-5" alt="English-flag" />
                        English
                      </div>
                    </a>
                  </li>

                  <li
                    onClick={() => {
                      setSelectedLanguage("Français");
                      setIsDropDownLanguageOpen(false);
                    }}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center gap-2">
                        <img src={frenchflag} alt="French-flag" />
                        Français
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={handleDropDownMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <Menu />
            </button>
          </div>

          <div
            className={`${
              isDropDownMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1 `}
          >
            <ul className="flex flex-col font-medium p-5 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8  md:flex-row md:mt-0 md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-200}
                  activeClass="nav-link-active"
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="" className="nav-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-100}
                  activeClass="nav-link-active"
                  className="nav-link"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  spy={true}
                  duration={500}
                  activeClass="nav-link-active"
                  className="nav-link"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="contact"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-100}
                  activeClass="nav-link-active"
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

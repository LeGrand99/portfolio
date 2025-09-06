import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Footer from "./Footer";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Project from "./sections/Project";
import SmokeEffect from "./SmokeEffect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";

function Maincontent() {
  useEffect(() => {
    AOS.init({
      duration: 550,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900">
        <SmokeEffect />
        <Navbar />
        <Hero />
        <Project />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Maincontent;

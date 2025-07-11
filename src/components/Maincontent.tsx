import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Footer from "./Footer";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Project from "./sections/Project";

function Maincontent() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Maincontent;

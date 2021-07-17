import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "../components/AboutSection";
import Sidebar from "../components/Sidebar";
import Landing from "../components/LandingSection";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
// import SectionFour from "../components/SectionFour";
// import SectionFive from "../components/SectionFive";
import Aos from "aos";
import "aos/dist/aos.css"; //Aos.init sets global animations to things that we want to animate

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 100 });
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Landing />
      <div data-aos="fade-right">
        <SectionTwo />
      </div>
      <div data-aos="fade-left">
        <SectionThree />
      </div>
      {/* 
      <SectionFour />
      <SectionFive /> */}
      <About />
    </>
  );
}

import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/AboutSection";
import Sidebar from "../components/Sidebar";
import Landing from "../components/LandingSection";
import SectionTwo from "../components/SectionTwo";
// import SectionThree from "../components/SectionThree";
// import SectionFour from "../components/SectionFour";
// import SectionFive from "../components/SectionFive";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Landing />
      <SectionTwo />
      {/* <SectionThree />
      <SectionFour />
      <SectionFive /> */}
      <About />
    </>
  );
}

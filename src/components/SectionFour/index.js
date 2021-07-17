import { useEffect } from "react";
import "./sectionFour.css";
import Aos from "aos";
import "aos/dist/aos.css"; //Aos.init sets global animations to things that we want to animate
import homeLab from "../../assets/home-lab.svg";
import homeExpertise from "../../assets/home-expertise.svg";
import homeHygiene from "../../assets/home-hygiene.svg";
import homeRetention from "../../assets/home-retention.svg";

export default function SectionFour() {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 100 });
  }, []);

  return (
    <div id="learnMore" className="sectionFour-container">
      <div className="sectionFour-content">
        <div data-aos="fade-up" className="sectionFour-text">
          <h2>
            <span>SECTION FOUR</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <span>
            <p> > Section Four </p>
          </span>
        </div>
        <div className="sectionFour-icons-container">
          <div className="sectionFour-icons">
            <div className="sectionFour-icons-box">
              <img src={homeExpertise} alt="icons" />
              <p>LOREM</p>
            </div>
            <div className="sectionFour-icons-box">
              <img src={homeHygiene} alt="icons" />
              <p>LOREM IPSUM</p>
            </div>
            <div className="sectionFour-icons-box">
              <img src={homeLab} alt="icons" />
              <p>LOREM</p>
            </div>
            <div className="sectionFour-icons-box">
              <img src={homeRetention} alt="icons" />
              <p>LOREM IPSUM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

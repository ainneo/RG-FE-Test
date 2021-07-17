import { useEffect } from "react";
import "./sectionTwo.css";
import Aos from "aos";
import "aos/dist/aos.css"; //Aos.init sets global animations to things that we want to animate

export default function SectionTwo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="learnMore" className="section-container">
      <div className="section-content">
        <div data-aos="fade-up" className="section-text">
          <h2>
            <span>SECTION TWO</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <span>
            <p> > Section Two </p>
          </span>
        </div>

        <div className="section-img"></div>
      </div>
    </div>
  );
}
// https://www.youtube.com/watch?v=JcHLxzrsRS4

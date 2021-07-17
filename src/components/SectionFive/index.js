import { useEffect } from "react";
import "./sectionFive.css";
import Aos from "aos";
import "aos/dist/aos.css"; //Aos.init sets global animations to things that we want to animate

export default function SectionFive() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 10 });
  }, []);

  return (
    <div className="sectionFive-banner">
      <div className="sectionFive-banner-content">
        <div data-aos="slide-left" className="sectionFive-banner-text">
          <h2>SECTION FIVE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#about">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

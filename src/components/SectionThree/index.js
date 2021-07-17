import { useEffect } from "react";
import "./sectionThree.css";
import Aos from "aos";
import "aos/dist/aos.css"; //Aos.init sets global animations to things that we want to animate

export default function SectionThree() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 10 });
  }, []);

  return (
    <div className="sectionThree-banner">
      <div className="sectionThree-banner-content">
        <div data-aos="slide-right" className="sectionThree-banner-text">
          <h2>SECTION THREE</h2>
          <a href="#about">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import "./sectionSix.css";
import Aos from "aos";
import "aos/dist/aos.css"; //Aos.init sets global animations to things that we want to animate
import CarouselConfig from "./CarouselConfig";

export default function SectionSix() {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 100 });
  }, []);

  return (
    <div id="what" className="sectionSix-container">
      <div className="sectionSix-content">
        <div data-aos="fade-up" className="sectionSix-text">
          <h2>
            <span>SECTION SIX LOREM IPSUM</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="sectionSix-carousel-container">
          <CarouselConfig />
        </div>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import "./landing.css";
import Aos from "aos";
import "aos/dist/aos.css"; //Aos.init sets global animations to things that we want to animate

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 3000, delay: 400 });
  }, []);

  return (
    <div className="banner">
      <div data-aos="fade-in" data-aos-mirror="true" className="banner-content">
        <div className="banner-text" id="text-fade">
          <h1>WELCOME TO</h1>
          <h1>Rooster Grin</h1>
          <a href="#learnMore">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

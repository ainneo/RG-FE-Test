import React from "react";
import "./landing.css";

export default function Landing() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text fade-in-text">
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

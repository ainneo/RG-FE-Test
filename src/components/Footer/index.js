import React from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Follow Us:</p>
      <div>
        <div className="footer-wrapper">
          <a
            href="https://www.roostergrin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="social" />
          </a>
          <a
            href="https://www.roostergrin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="social" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;

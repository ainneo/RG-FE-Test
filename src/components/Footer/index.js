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
          <img src={facebook} alt="social" />
          <img src={instagram} alt="social" />
        </div>
      </div>
    </div>
  );
};
export default Footer;

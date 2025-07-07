import React from "react";
import "../styles/global.scss";
import Pill from "../components/Pill";

function Footer() {
  return (
    <div class="footer-container">
      <div className="line"></div>
      <div className="footer">
        <p style={{ opacity: "70%" }} className="smaller-text">
          Created by Matilda Gomez Lindblom
        </p>
      </div>
    </div>
  );
}

export default Footer;

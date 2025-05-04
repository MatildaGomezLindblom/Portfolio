import React from "react";
import "../styles/global.scss";
import Pill from "../components/Pill";

function Footer() {
  return (
    <div class="footer-container">
      <div className="line">
      </div>
      <div className="footer">
        <p className="smaller-text">Created by Matilda Gomez Lindblom using:</p>
        <p className="smaller-text">React • Sass • Framer Motion</p>
      </div>
    </div>
  );
}

export default Footer;

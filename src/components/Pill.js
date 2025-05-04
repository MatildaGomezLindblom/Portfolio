import React from "react";
import "../styles/Pill.scss";

function Pill({ title }) {
  return (
    <div className="pill-container">
      <button className="pill">{title}</button>
    </div>
  );
}

export default Pill;

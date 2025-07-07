import React from "react";
import masterThesis from "../../assets/projects/SEOAIAssistant/SEOAIAssistantThesis.png";
import ButtonPrimary from "../ButtonPrimary";
import { FaArrowRight } from "react-icons/fa6";
const ThesisCard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={masterThesis}
        alt="Master Thesis Cover"
        className=""
        style={{ width: "100%" }}
      />
      <div>
        <p style={{ paddingBottom: "0px" }}>
          My thesis is published and accessible on DiVA portal.
        </p>
        <ButtonPrimary>
          Read thesis <FaArrowRight />
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default ThesisCard;

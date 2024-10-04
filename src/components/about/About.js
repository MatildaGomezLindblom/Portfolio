import React, { useEffect, useRef, useState } from "react";
import "../../styles/About.scss";
import MoreButton from "./MoreButton";
import Me from "../../assets/about/MatildaCutOut.png";
import MySkills from "./MySkills";

function About() {
  const matildaRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); //stop observing after the first intersection
        }
      },
      { threshold: 0.3 }
    );

    if (matildaRef.current) {
      observer.observe(matildaRef.current);
    }

    return () => {
      if (matildaRef.current) {
        observer.unobserve(matildaRef.current);
      }
    };
  }, []);

  return (
    <div className="about-container">
      <div className="space"></div>
      <div className="fade-divider"></div>
      <div className="about-grid">
        <div
          ref={matildaRef}
          className={`matilda-cut-out ${inView ? "in-view" : ""}`}
        >
          <img src={Me} alt="Matilda" />
        </div>
        <div className={`about-text-section ${inView ? "in-view" : ""}`}>
          <h2>
            Hi! My name is <mark>Matilda Gomez Lindblom</mark>
          </h2>
          <p>
            As a master's student in interaction and design, I combine my
            interests in creation and problem-solving with my broad skillset to
            create meaningful and user centered user experiences.
          </p>
          {/* <MoreButton></MoreButton> */}
        </div>
      </div>
      <MySkills></MySkills>
      <div className="space"></div>
    </div>
  );
}

export default About;

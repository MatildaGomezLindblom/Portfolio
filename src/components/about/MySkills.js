import React from "react";
import "../../styles/MySkills.scss";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { FaBrain } from "react-icons/fa6";

function About() {
  return (
    <div className="my-skills-container">
      <div className="title">
        <h2>Three areas of expertise</h2>
        <i>One holistic perspective.</i>
      </div>
      <div className="skills">
        <div className="skill skill-1">
          <IoHeart className="skills-icon icon1" />
          <div className="skills-title">
            <h3>User Experience</h3>
            <p>
              The user experience is at the core of my creative process.
              Identifying and understanding the target audience is crucial for
              creating accessible and value-driven solutions. Therefore, I
              always strive to understand users' desires and needs by combining
              qualitative and quantitative data.
            </p>
          </div>
        </div>
        <div className="skill skill-2">
          <FaBrain className="skills-icon icon2" />
          <div className="skills-title">
            <h3>Development</h3>
            <p>
              I have experience in everything from systems-level programming in
              C and machine learning in Python to web development with
              JavaScript in React and Android development in Kotlin. With my
              experience in both backend and frontend, I can contribute to the
              entire development process and easily adapt to new languages and
              frameworks.
            </p>
          </div>
        </div>
        <div className="skill skill-3">
          <FaFireFlameCurved className="skills-icon icon3" />
          <div className="skills-title">
            <h3>Graphic Design</h3>
            <p>
              With my keen sense of color and shape, as well as my knowledge of
              typography and visual hierarchy, I am skilled at communicating my
              ideas visually and creating appealing materials to effectively
              build understanding and convey messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

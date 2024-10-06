import React from "react";
import "../../styles/MySkills.scss";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { FaBrain } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const { scrollYProgress } = useScroll();

  const opacitySkill1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const ySkill1 = useTransform(scrollYProgress, [0, 0.4], [1000, 0]);

  const opacitySkill2 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const ySkill2 = useTransform(scrollYProgress, [0, 0.42], [1200, 0]);

  const opacitySkill3 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const ySkill3 = useTransform(scrollYProgress, [0, 0.44], [1400, 0]);

  const opacityTitle = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const yTitle = useTransform(scrollYProgress, [0, 0.25], [1000, 0]);

  return (
    <div className="my-skills-container">
      <motion.div className="title" style={{ opacity: opacityTitle, y: yTitle }}>
        <h2>Three areas of expertise</h2>
        <i>One holistic perspective.</i>
      </motion.div>
      <motion.div className="skills">
        <motion.div
          className="skill skill-1"
          style={{ opacity: opacitySkill1 , y: ySkill1}}
        >
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
        </motion.div>

        <motion.div
          className="skill skill-2"
          style={{ opacity: opacitySkill2 , y: ySkill2}}
        >
          <FaBrain className="skills-icon icon2" />
          <div className="skills-title">
            <h3>Development</h3>
            <p>
              I have experience in everything from C programming in Unix and
              machine learning in Python, to web and app development in React
              and Android Studio. With experience in both backend and frontend,
              I can contribute to the entire development process and easily
              adapt to new languages and frameworks.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="skill skill-3"
          style={{ opacity: opacitySkill3 , y: ySkill3}}
        >
          <FaFireFlameCurved className="skills-icon icon3" />
          <div className="skills-title">
            <h3>Graphic Design</h3>
            <p>
              With my keen sense of color and shape, as well as my knowledge of
              typography and visual hierarchy, I am skilled at communicating my
              ideas visually and creating appealing materials to effectively
              convey messages and create understanding.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;

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
        <motion.div
          className="title"
          style={{ opacity: opacityTitle, y: yTitle }}
        >
          <h2>Three areas of expertise</h2>
          <i>One holistic perspective.</i>
        </motion.div>
        <motion.div className="skills">
          <motion.div
            className="skill skill-1"
            style={{ opacity: opacitySkill1, y: ySkill1 }}
          >
            <IoHeart className="skills-icon icon1" />
            <div className="skills-title">
              <h3>User Experience</h3>
              <p>
                The user experience is at the core of my creative process. I
                design accessible, and value-driven solutions by combining
                qualitative and quantitative user insights through an iterative
                process.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="skill skill-2"
            style={{ opacity: opacitySkill2, y: ySkill2 }}
          >
            <FaBrain className="skills-icon icon2" />
            <div className="skills-title">
              <h3>Development</h3>
              <p>
                I have experience building APIs, manage databases, and craft
                engageing user interfaces using a diverse set of tools and
                libraries. My frontend and backend skills let me contribute
                throughout the development process and quickly adapt to new
                tools.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="skill skill-3"
            style={{ opacity: opacitySkill3, y: ySkill3 }}
          >
            <FaFireFlameCurved className="skills-icon icon3" />
            <div className="skills-title">
              <h3>Graphic Design</h3>
              <p>
                With a strong sense of color and shape, typography and visual
                hierarchy, I communicate my ideas and create a mutual
                understanding through appealing and effective visuals.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
  );
}

export default About;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/ProjectsSection.scss";

function ProjectsSection() {
  const [transitioningProject, setTransitioningProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: "project-1",
      page: "/Hotspot",
      tags: "React Native • User Management • UX • Firebase",
      title:
        "HOTSPOT - The app for pinning and sharing your favorite places with friends.",
    },
    {
      id: "project-3",
      page: "/DF",
      tags: "Next • Knightec • UX • Supabase",
      title:
        "DIGITAL PHOTO WALL - A digital and interactive complement to Knightec's physical photo wall.",
    },
    {
      id: "project-2",
      page: "/Memosphere",
      tags: "React Native • OpenAI • UX • Firebase",
      title:
        "MEMOSPHERE - Stay in touch with loved ones in an exciting and unique way using AI.",
    },
    {
      id: "project-4",
      page: "/SoB",
      tags: "Business Development • Internship • UX • CGI • Region Västernorrland",
      title:
        "VALUE-CREATING DIGITAL SERVICES IN HEALTHCARE - Exploration and improvement of Västernorrlands management of the digital platform Stöd och Behandling.",
    },
  ];

  const handleImageClick = (project) => {
    //get properties of element
    const element = document.querySelector(`#${project.id}`);
    const elementRect = element.getBoundingClientRect();

    //get element and screen dimensions
    const elementWidth = elementRect.width;
    const elementHeight = elementRect.height;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    //calculate the scale factor to cover the entire screen width
    const scaleFactor = screenWidth / elementWidth;

    //calculate translation to center the element
    const scaledWidth = elementWidth * scaleFactor;
    const scaledHeight = elementHeight * scaleFactor;

    const translateX =
      (screenWidth - scaledWidth) / 2 - elementRect.left + elementWidth / 2;
    const translateY =
      (screenHeight - scaledHeight) / 2 - elementRect.top + elementHeight / 2;

    //set the transitioning project and its animation properties
    setTransitioningProject({
      id: project.id,
      scale: scaleFactor,
      x: translateX,
      y: translateY,
      zIndex: 10000,
    });

    setTimeout(() => {
      navigate(project.page);
    }, 800);
  };

  return (
    <div className="projects-container">
      <div className="section-title">
        <div className="line"></div>
        <h2 className="title">Featured projects</h2>
        <div className="line"></div>
      </div>
      <div className="featured-projects">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            id={project.id}
            className="project"
            initial={{ scale: 1, x: 0, y: 0, zIndex: 10 }}
            animate={
              transitioningProject?.id === project.id
                ? {
                    scale: transitioningProject.scale,
                    x: transitioningProject.x,
                    y: transitioningProject.y,
                    zIndex: transitioningProject.zIndex,
                  }
                : { scale: 1, x: 0, y: 0, zIndex: 10 }
            }
            transition={{ duration: 0.8, type: "easeIn" }}
            onClick={() => handleImageClick(project)}
          >
            {transitioningProject?.id !== project.id && (
              <div className="overlay">
                <p>{project.tags}</p>
                <h4>{project.title}</h4>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="section-end">
        <div className="line"></div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default ProjectsSection;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/ProjectsSection.scss";

function ProjectsSection() {
  const [transitioningProject, setTransitioningProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: "project-0",
      page: "/SEOAIAssistant",
      tags: "Umbraco • Azure OpenAI • .NET9 • Lit • Vite • UX • Python",
      title:
        "SEO AI ASSISTANT",
        description:
        "An LLM-powered Umbraco Backoffice extension that streamlines SEO meta tag creation and page performance tracking for web editors.",
        image: require('../../assets/projects/SEOAIAssistant/SEOAIAssistantHero.jpg'),
    },
    {
      id: "project-1",
      page: "/Hotspot",
      tags: "React Native • User Management • UX • Map Integration • Firebase",
      title:
        "HOTSPOT",
        description:
        "The app for pinning and sharing your favorite places with friends.",
        image: require('../../assets/projects/HotspotHeroImage.jpg'),
    },
    {
      id: "project-3",
      page: "/DF",
      tags: "Next • Searching • Filtering • Sorting • UX • Supabase",
      title:
        "DIGITAL PHOTO WALL",
        description:
        "A digital and interactive complement to Knightec's physical photo wall.",
        image: require('../../assets/projects/DF/DFHeroImage.png'),
    },
    {
      id: "project-2",
      page: "/Memosphere",
      tags: "React Native • OpenAI • Vision API • UX • Firebase",
      title:
        "MEMOSPHERE",
        description:
        "Stay in touch with loved ones in an exciting and unique way using AI.",
        image: require('../../assets/projects/Memosphere/MemosphereHeroImage.png'),
    },
    {
      id: "project-4",
      page: "/SoB",
      tags: "Business Development • User Research • Communication • Process Optimization • Graphic Design",
      title:
        "VALUE-CREATING DIGITAL SERVICES IN HEALTHCARE",
        description:
        "Exploration and improvement of Västernorrlands management of the digital platform Stöd och Behandling.",
        image: require('../../assets/projects/SoBHero.png'),
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

  const isOdd = projects.length % 2 !== 0;

  return (
    <div className="projects-container">
            <div className="section-title">
        <h2 className="title">Featured</h2>
        <h2 className="title">projects</h2>
      </div>
      <div className="featured-projects">
        {projects.map((project, index) => {
          const isFirst = index === 0 && isOdd;
          return (
          <div key={project.id} className={`project-container ${isFirst ? "wide-project" : "normal-project"}`}>
          <motion.div
            key={project.id}
            id={project.id}
            style={{ backgroundImage: `url(${project.image})` }}
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
              </div>
            )}
          </motion.div>
          <div className="project-label">
          <h5>{project.title}</h5>
          <p className="smaller-text">{project.description}</p>
          </div>
          </div>
          );
        })}
      </div>
      <div className="space"></div>
    </div>
  );
}

export default ProjectsSection;

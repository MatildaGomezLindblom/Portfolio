import "../../styles/SEOAIAssistant.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import SoBBackground from "../../assets/projects/SoB/SoBBackground.png";

function SoB() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "SEO AI Assistant",
    subtitle:
      "Making SEO easier and more time efficient.",
    sections: [
      {
        heading: "Challenge",
        text: "Web editors lack the time and knowledge needed to fill out meta titles and descriptions when publishing content in Umbraco",
      },
      {
        heading: "Solution",
        text: "An Umbraco extension consisting of an AI Assistant giving suggestions based on provided context, together with integrated SEO statistics for improved understanding and motivation.",
      },
    ],
    buttonText: "Jump to the result",
    additionalInfo: [
      {
        heading: "Context",
        text: "Master thesis at Oxio in the spring of 2025 (30hp).",
      },
      {
        heading: "Resources",
        text: "17 weeks and contact with the target group through Oxios network of clients.",
      },
      {
        heading: "Tools",
        text: "Figma, Umbraco, .NET9 (C#), Azure OpenAI, Python, Vite (Lit, TypeScript).",
      },
    ],
    role: {
      heading: "My role and task",
      tasks: [
        "User research",
        "UX/UI design",
        "Backend",
        "Frontend",
        "End user testing",
      ],
    },
  };

  const sections = [
    {
      id: "section1",
      title: "PRESTUDY",
      subtitle:
        "Understanding the context.",
      content: (
        <div className="SoB-section">
          <p>I'm still working on this project, stay tuned for updates!</p>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULT",
      subtitle:
        "",
      content: (
        <div className="SoB-section">
          
        </div>
      ),
    },
    {
      id: "section3",
      title: "FINISHING THOUGHTS",
      subtitle: "",
      content: (
        <div className="SoB-section">
         
        </div>
      ),
    },
  ];

  return (
    <div className="SoB-container">
      <div className="SoB-hero-container">
        <ProjectOverview projectData={projectData} />
      </div>
      <div className="content-container">
        <div className="vertical-navbar">
          <VerticalNavbar sections={sections}></VerticalNavbar>
        </div>
        <div className="content">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="section">
              <h2 className="project-section-title">{section.title}</h2>
              <h4 className="project-section-subtitle">{section.subtitle}</h4>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoB;

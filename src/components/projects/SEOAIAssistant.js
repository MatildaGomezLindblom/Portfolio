import "../../styles/SEOAIAssistant.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import Footer from "../footer";
import SEOAIAssistantMethod from "../../assets/projects/SEOAIAssistant/SEOAIAssistantMethod.png";
import ThesisCard from "./ThesisCard";

function SEOAI() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "SEO AI Assistant",
    subtitle: "Making SEO easier and more time efficient.",
    sections: [
      {
        heading: "Challenge",
        text: "Web editors lack the time and knowledge required to fill out meta titles and descriptions when publishing content using their CMS.",
      },
      {
        heading: "Solution",
        text: "An Umbraco extension consisting of an AI Assistant, giving suggestions based on provided context, together with integrated SEO statistics for improved understanding and motivation.",
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
      title: "MASTER THESIS",
      subtitle: "Full thesis and presentation.",
      content: (
        <div className="SEOAI-section">
          <p>
            I recorded my master thesis presentation in Swedish for anyone who
            wants a quick and accessible overview.
            <br />
            <br />
            Prefer reading? Scroll down for a short summary of my method and
            findings. Want the full picture? Check out the full thesis linked
            below 😊
          </p>
          <div className="close-top">
            <iframe
              src={`https://www.youtube.com/embed/F70UanLAEns`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Presentation"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <div style={{ paddingTop: "40px" }}>
            <ThesisCard></ThesisCard>
          </div>
        </div>
      ),
    },
    {
      id: "section2",
      title: "METHOD",
      subtitle:
        "A user and content centered approach through a Design Thinking process.",
      content: (
        <div className="SEOAI-section">
          <img
            className="hotspot-storyboard"
            src={SEOAIAssistantMethod}
            alt="A design thinking process."
          ></img>
          <h3
            style={{
              color: "#0B69A6",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            Empathize
          </h3>
          <p>
            This phase combined a literature study on AI, SEO and UX, with an
            expert evaluation of similar solutions, and contextual interviews
            with 5 web editors.
          </p>
          <h3
            style={{
              color: "#1AAADF",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            Define
          </h3>
          <p>
            Interviews were decoded and findings were summarized to form a set
            of How Might We questions and a list of wanted functionality.
          </p>
          <h3
            style={{
              color: "#42CDAC",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            Ideate
          </h3>
          <p>
            Ideas were generated and prioritized in an Impact-effort-matrix and
            a MoSCoW.
          </p>
          <h3
            style={{
              color: "#9E51DA",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            Prototype
          </h3>
          <p>
            Ideas were translated into lo-fi paper sketches and later into
            high-fidelity prototypes in Figma. In parallel, multiple AI models
            were evaluated using custom scripts to test their reliability,
            performance, and language capabilities (Swedish and English). Prompt
            engineering played a critical role and was continuously iterated for
            better results.
          </p>
          <h3
            style={{
              color: "#FE5A96",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            Test
          </h3>
          <p>
            A usability test was performed on the hi-fi prototype with 4 users
            using the method Think aloud.
          </p>
          <h3
            style={{
              color: "#FF9249",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            Implement
          </h3>
          <p>
            After selecting model, prompt and finalizing the design, part of the
            design was developed as a functional CMS extension using modern web
            technologies like Lit, TypeScript, and .NET.
          </p>
          <h3
            style={{
              color: "#FAC324",
              textShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            Evaluate
          </h3>
          <p>
            By creating a functional prototype of the AI assistant, the AI-human
            interaction could be evaluated through end-user tests to assess its
            efficiency, effectiveness and user satisfaction. The solution was
            also evaluated through an expert evaluation.
          </p>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULT",
      subtitle: "A successful solution!",
      content: (
        <div className="SEOAI-section">
          <p>
            A demo video of the functional (developed) prototype and other
            findings can be seen below.
          </p>
          <div className="close-top">
            <iframe
              src={`https://www.youtube.com/embed/CrYdEbmuSb8`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Demo"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <h3>High user satisfaction</h3>
          <p>
            The final user testing achieved very high user satisfaction, scoring
            a perfect 100 on the System Usability Scale (SUS).
          </p>
          <h3>Efficient with quality</h3>
          <p>
            While quantitative time savings couldn't be confirmed in the limited
            testing, editors reported perceived improvements in both efficiency
            and content quality. They appreciated the clarity, control, and
            inspiration the assistant provided when generating meta titles and
            descriptions.
          </p>
          <h3>Bridging the gap between users and AI</h3>
          <p>
            The tool successfully met its goal of bridging the gap between
            editor needs and AI capabilities. Key features like multiple
            suggestions, content previews, and tailored AI prompts helped
            address trust issues and reduce the risk of AI hallucinations. By
            offering transparency and editorial control, the tool increased
            editors' confidence in using AI, even among those with limited SEO
            or AI experience.
          </p>
          <h3>Effective cross-disciplinary approach</h3>
          <p>
            The iterative, user-centered approach, was crucial to aligning the
            AI's behavior with real editor needs. This was further supported by
            research, especially on UX for generative AI interfaces in
            particular. Combining design and technical evaluation enabled quick
            adjustments and ensured both usability and model output quality.
            Overall, the methodology proved effective for developing AI tools
            that are not only functional but genuinely useful and trusted.
          </p>
        </div>
      ),
    },
    {
      id: "section4",
      title: "REFLECTION",
      subtitle: "My thoughts on the project and the future.",
      content: (
        <div className="SEOAI-section">
          <p>
            This was such a fun and rewarding project, allowing me to combine UX
            design and programming while diving deeper into AI. I especially
            enjoyed exploring how to design with both the limitations and
            possibilities of AI in mind. It was also eye-opening to learn about
            SEO and better understand the unique perspective of web editors.
            <br />
            <br />
            While the prototype was well-received, a full implementation would
            allow for real-world insights based on analytics rather than
            perceived value.
            <br />
            <br />
            Both AI and SEO are quickly evolving fields, making it crucial to
            stay up to date with new models, customization techniques, legal
            frameworks, and shifting search engine algorithms and behaviors.
            <br />
            <br />
            My thesis lays a groundwork for human-centered AI in CMS
            environments, but unlocking its full value will require continued
            iteration, testing, and collaboration.
          </p>
          <p>
            <i>
              A heartfelt thanks goes out to my supervisors Keni Ren and Anna
              Nystedt, everyone at Oxio, my participants, and my peer review
              group and friends for their invaluable support and feedback!
            </i>
          </p>
          <div className="space"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="SEOAI-container">
      <div className="SEOAI-hero-container">
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
      <Footer></Footer>
    </div>
  );
}

export default SEOAI;

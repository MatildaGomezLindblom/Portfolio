import "../../styles/SoB.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import SoBBackground from "../../assets/projects/SoB/SoBBackground.png";

function SoB() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Value-Creating Digital Services in Healthcare",
    subtitle:
      "An investigative study and proposal on how the region can increase the usage of the e-service Stöd och Behandling",
    sections: [
      {
        heading: "Challenge",
        text: "Region Västernorrland is one of the regions that uses Stöd och Behandling the least in relation to the population.",
      },
      {
        heading: "Solution",
        text: "Identification and highlighting of problems and solutions, including a process proposal and marketing materials.",
      },
    ],
    buttonText: "Jump to the result",
    additionalInfo: [
      {
        heading: "Context",
        text: "Summer internship 2024 as a consultant at CGI with Region Västernorrland as the client, in parallel with a 7.5 hp course in Design Thinking via Mittuniversitetet.",
      },
      {
        heading: "Resources",
        text: "8 weeks full-time work in collaboration with another engineering student.",
      },
      {
        heading: "Tools",
        text: "Figma, Teams, Microsoft Forms.",
      },
    ],
    role: {
      heading: "My role and task",
      tasks: [
        "Business development",
        "Consultant",
        "UX/UI design",
        "Interviews",
        "Surveys",
      ],
    },
  };

  const sections = [
    {
      id: "section1",
      title: "BACKGROUND",
      subtitle:
        "About the intership, the assignment and the e-service in focus.",
      content: (
        <div className="SoB-section">
          {/* <div className="quotes">
            <div className="speech-bubble">"hej"</div>
            <div className="speech-bubble">hej</div>
            <div className="speech-bubble">hej</div>
          </div> */}
          <h3>The Internship</h3>
          <p>
            Mittuniversitetet's internship for future engineers offers
            engineering students in their 3rd and 4th years the opportunity to
            work on real projects for companies or government agencies during
            the summer. The program combines practical work with a summer course
            in <i>Design Thinking</i> (7.5 hp). I applied to Region
            Västernorrland and CGI's project on the theme{" "}
            <i>Value-Creating Digital Services in Healthcare</i> and was
            selected, along with another student.
          </p>

          <h3>The Assignment</h3>
          <p>
            We were assigned two mentors from CGI and four from the region. Two
            of the regional mentors were specialists in the{" "}
            <i>Stöd och Behandling</i> e-service. They made it clear that we
            would have a lot of freedom but suggested we focus on a real issue,
            which in this case was the fact that <i>Stöd och Behandling</i> is
            not being used as much as desired.
          </p>

          <h3>What is Stöd och Behandling?</h3>
          <p>
            It is an e-service available through 1177.se. In short, it's a
            platform where healthcare providers can offer complementary support
            and treatment to their patients digitally, through various programs.
            The platform itself is owned by Inera and is available to all
            regions, but it is up to each region to manage the service locally.
            The goal of <i>Stöd och Behandling</i> is to make healthcare more
            accessible and to involve the patient more, while enabling providers
            to have time for more patients. So why is it that healthcare
            providers are not prescribing the programs the region creates and
            purchases?
          </p>

          <a href="https://www.inera.se/tjanster/alla-tjanster-a-o/stod-och-behandling/">
            More about Stöd och Behandling here
          </a>
          <img
            src={SoBBackground}
            alt="An illustration of Stöd och Behandling."
          ></img>
        </div>
      ),
    },
    {
      id: "results",
      title: "THE WHOLE PROCESS",
      subtitle:
        "From problem definition, through the design process, to the final delivery.",
      content: (
        <div className="SoB-section">
          <p>
            The project concluded with a final presentation for the course, for
            CGI, and for Region Västernorrland. For the latter, we invited
            everyone who had participated in our process. Among the attendees
            were the regional administrators of <i>Stöd och Behandling</i> from
            Västerbotten, who extended an invitation for us to present again
            during a webinar.
            <br />
            <br />
            This presentation was recorded, so instead of retelling the entire
            process and results in text, I’ve embedded the presentation here!
          </p>

          <div>
            <iframe
              src={`https://www.youtube.com/embed/P9VEM8QGNog`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      ),
    },
    {
      id: "section3",
      title: "FINISHING THOUGHTS",
      subtitle: "A fantastic summer!",
      content: (
        <div className="SoB-section">
          <p>
            The internship was a very inspiring and rewarding start of my
            career. I finally had the chance to apply my knowledge to a real
            problem while also learning a lot of new things from the process and
            from my experienced supervisors! In addition to gaining a better
            insight into how <i>Stöd och Behandling</i> works and how the
            healthcare system is structured in general, I also gained experience
            working with a client. It was an exciting process where the
            exploratory aspect played a significant role, where we had to
            utilize a lot of different methods to connect with people since it
            was vacation times. We had a lot of freedom and collected data in
            various ways to successfully capture the problem and its solution,
            all while maintaining a continuous dialogue with our supervisors and
            "clients".
            <br />
            <br />
            Our work seems to be appreciated as we received many kind words both
            during and after the final presentation, from CGI and Region
            Västernorrland, as well as from other stakeholders involved in the
            process. They especially appreciated the fact that we had come up
            with realistic solution based on the unique target group needs and
            desires, as well as the limitation of resources in the organisation. The
            material has been handed over to the region, and hopefully, it will
            prove useful in the future!
            <br />
            <br />
            <a href="https://www.miun.se/utbildning/civing/internship/intervjusida/matilda-gomez-lindblom-och-joline-hellstrom/">
              Read more about our internship at miun.se
            </a>
          </p>
          <p>
            <i>
              A huge thank you to Joline Hellström for being such an amazing
              partner throughout the project!
            </i>
          </p>
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

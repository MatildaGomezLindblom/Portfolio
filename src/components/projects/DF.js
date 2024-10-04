import "../../styles/DF.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import ImageCarousel from "./Carousel";
import { FaGithub } from "react-icons/fa";
import DFPhotoWallFront from "../../assets/projects/DF/DFPhotoWallFront.png";
import DFPhotoWallBackside from "../../assets/projects/DF/DFPhotoWallBackside.png";

import LoFiExampleDF from "../../assets/projects/DF/LoFiExampleDF.png";
import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
import arrowUpRight from "../../assets/projects/Hotspot/arrowUpRight.png";
import idea from "../../assets/projects/Hotspot/Idea.png";
import HiFiExampleDF from "../../assets/projects/DF/HiFiExampleDF.png";

import DFotherServices from "../../assets/projects/DF/DFotherServices.png";
import DFpersona1 from "../../assets/projects/DF/DFpersona1.png";
import DFpersona2 from "../../assets/projects/DF/DFpersona2.png";
import DFimpactEffortMatrix from "../../assets/projects/DF/DFimpactEffortMatrix.png";

import DFLoFi1 from "../../assets/projects/DF/DFLoFi1.png";
import DFLoFi2 from "../../assets/projects/DF/DFLoFi2.png";
import DFLoFi3 from "../../assets/projects/DF/DFLoFi3.png";
import DFLoFi4 from "../../assets/projects/DF/DFLoFi4.png";
import DFLoFi5 from "../../assets/projects/DF/DFLoFi5.png";

import DFloFiResults1 from "../../assets/projects/DF/DFloFiResults1.png";
import DFloFiResults2 from "../../assets/projects/DF/DFloFiResults2.png";
import DFloFiResults3 from "../../assets/projects/DF/DFloFiResults3.png";
import DFloFiResults4 from "../../assets/projects/DF/DFloFiResults14.png";
import DFloFiResults5 from "../../assets/projects/DF/DFloFiResults5.png";

import DFKnightecInstagram from "../../assets/projects/DF/DFKnightecInstagram.png";
import DFKnightecWebsite from "../../assets/projects/DF/DFKnightecWebsite.png";
import DFIcons from "../../assets/projects/DF/DFIcons.png";
import DFGraphicProfile from "../../assets/projects/DF/DFGraphicProfile.png";

import DFChanges1 from "../../assets/projects/DF/DFChanges1.jpg";
import DFChanges2 from "../../assets/projects/DF/DFChanges2.jpg";
import DFChanges3 from "../../assets/projects/DF/DFChanges3.jpg";
import DFChanges4 from "../../assets/projects/DF/DFChanges4.jpg";
import DFChanges5 from "../../assets/projects/DF/DFChanges5.jpg";
import DFFinalHiFi from "../../assets/projects/DF/DFFinalHiFi.png";

function DF() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Digital photo wall",
    pillText: "! Ongoing project",
    subtitle:
      "A digital and interactive complement to Knightec's physical photo wall.",
    sections: [
      {
        heading: "Challenge",
        text: "To design and develop a digital version of the analog photo wall at Knightec's office, aiming to reinforcing the impression that the company is at the forefront of technology and increasing community in the office.",
      },
      {
        heading: "Solution",
        text: "A web application in two parts: a touch view for the office and a desktop view. The application allows users to see professional and personal information about all office employees, sort and filter by different groups, and spread information about events and similar activities.",
      },
    ],
    buttonText: "Jump to the results",
    additionalInfo: [
      {
        heading: "Context",
        text: "Group project on two courses 2023-2024 (Produktutveckling i medieteknik med metoden Design-Build-Test and during Avancerat kvalitetsprojekt inom Interaktionsteknik)",
      },
      {
        heading: "Resources",
        text: "Design 15 weeks at 25% in a group of 5 people (approximately the scope of a thesis) and development 8 weeks 50 % 7,5 hp, supervised by Knightec.",
      },
      {
        heading: "Tools",
        text: "Figma, VS Code, Next, DevOps, Supabase.",
      },
    ],
    role: {
      heading: "My role and tasks",
      tasks: [
        "UX/UI design",
        "User testing of prototypes",
        "Architecture",
        "Calendar implementation",
        "Posts and events",
      ],
    },
  };

  const carouselImages = [

      {
        src: DFLoFi1,
        legend:
          "Version 1 features a sidebar with filtering functionality and a carousel displaying all current announcements in motion.",
      },
      {
        src: DFLoFi2,
        legend: "Version 2 has the profile presented as a popup.",
      },
      {
        src: DFLoFi3,
        legend: "Version 3 includes a lot of functionality in a navbar.",
      },
      {
        src: DFLoFi4,
        legend:
          "Version 4 initially had a quite advanced search function, which was then replaced by a dropdown filtering box.",
      },
      {
        src: DFLoFi5,
        legend:
          "Version 5 places a strong emphasis on a more professional front and a more personal back of the profile.",
      },
  ];

  const LoFiImages = [
    DFloFiResults1,
    DFloFiResults2,
    DFloFiResults3,
    DFloFiResults4,
    DFloFiResults5,
  ];

  const HiFiChangesImages = [
    DFChanges1,
    DFChanges2,
    DFChanges3,
    DFChanges4,
    DFChanges5,
  ];

  const sections = [
    {
      id: "section1",
      title: "DESIGN INTRODUCTION",
      subtitle:
        "A thorough design process from concept to interactive Hi-Fi in Figma.",
      content: (
        <div>
          <div className="design-overview">
            <div className="design-overview-content">
              <img id="idea" src={idea}></img>
              <img id="arrowDownRight" src={arrowDownRight}></img>
              <img id="DFLoFiPreview" src={LoFiExampleDF}></img>
              <img id="arrowUpRight" src={arrowUpRight}></img>
              <img id="DFHiFiPreview" src={HiFiExampleDF}></img>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section2",
      title: "PRESTUDY",
      subtitle: "Project preparations and deep dive into the problem area.",
      content: (
        <div className="DF-section">
          <p>
            In the search for an exciting project for the course, we met a group
            at Knightec who had an interesting proposal. They showed us their
            physical photo wall in the office, which consists of pictures of all
            the office's employees. The pictures can be turned around to dispaly
            a short introduction in the back written by the person themselves.
            The proposal was to create a digital version of this photo wall,
            with the same purpose as the current one, but with additional
            functionality and more interactivity.
          </p>
          <div className="DF-split-view">
            <img
              src={DFPhotoWallFront}
              alt="Knightecs photo wall today from the front."
            ></img>
            <img
              src={DFPhotoWallBackside}
              alt="Knightecs photo wall, example from the back of one of the picture frames."
            ></img>
          </div>

          <div className="DF-text-and-image">
            <div>
              <h3>Market Analysis</h3>
              <p>
                After a planning phase that included a SWOT analysis and the
                planning of the agile project through a GANTT chart, a market
                analysis was conducted where everyone in the group individually
                looked up similar services. Images and links were collected to
                create boards with inspiration to use moving forward.
                <br />
                <br />
                The conclusions drawn from this were that there seem to be
                several companies with large screens displaying pictures of all
                the office's employees, but no digital solution like the one our
                client desired appeared to exist. However, various types of HR
                platforms were examined where employees are showcased and sorted
                in different ways. There were also some large screens placed in
                offices that could be used to recognize employees, showcase the
                company's achievements, and display social media, etc, which
                inspired the process moving forward.
              </p>
            </div>
            <img
              src={DFotherServices}
              alt="Knightecs photo wall today from the front."
            ></img>
          </div>
          <div className="section-section">
            <h3>Personas</h3>
            <p>
              To understand the different types of people who will use the
              service, the project's client provided various use cases that
              formed the basis for two personas we found particularly
              interesting to keep in mind. The first is for a more experienced
              employee who is currently working remotely and finds it a bit
              challenging to keep up with changes at the office from home. The
              second one is younger and represents newcomers to the workplace
              and interns. This is a person who wants to use the service to get
              to know colleagues and feel included in the workplace.
            </p>
          </div>
          <div className="DF-split-view">
            <img
              src={DFpersona1}
              alt="Persona 1, consultant working remotely."
            ></img>
            <img src={DFpersona2} alt="Persona 2, new at the workplace."></img>
          </div>
          <div className="section-section">
            <h3>Interviews</h3>
            <p>
              Interviews were conducted to create context around the target
              group and to learn more about their wishes and needs. To gain the
              best possible insight into the target group, in addition to our
              two clients, three other employees were also interviewed.
              <br />
              <br />
              <b> Person 1:</b> Group manager who has been at Knightec for 2.5
              years, with responsibilities such as recruitment and sales
              meetings.
              <br />
              <br />
              <b> Person 2:</b> Relatively new consultant who has worked for
              about six months.
              <br />
              <br />
              <b> Person 3:</b> Senior consultant who has worked at the company
              for six years.
              <br />
              <br />
              The interviews were semi-structured and addressed questions
              regarding what they wish to do with the product, how profiles
              should look and suggested functionality, as well as preferred
              screen size. The results were summarized into categories and the
              responses were compared.
              <br />
              <br />
              The biggest differences among the participants were whether the
              purpose of the service should function as advertising outward or
              be a fun service for the employees. One opinion was that the
              service should completely replace the analog photo wall and merge
              with the information screen in the lobby of each office in the
              form of a large touchscreen, while the idea from the client's side
              was that the service should be a digital complement on a somewhat
              smaller screen.
            </p>
          </div>
          <div>
            <div className="highlighted-section">
              <h3>Conclusions from interviews</h3>
              <p>
                After discussions with the clients, it was decided that the
                purpose of the service is to be a fun complement to the photo
                wall for the employees, meaning it will not serve as advertising
                outward. However, it was discussed that the service could later
                be developed to also function as the outward-facing aspect by
                combining it with the information screen in the lobby. The
                screen should have fun features, but also important and useful
                functionality, such as seeing who works where, groupings,
                contact details, etc. The service should be designed for a
                smaller screen, such as a larger computer monitor.
              </p>
            </div>
          </div>
          <div className="section-section">
            <div>
              <h3>Brainstorming and prioritazion</h3>
              <p>
                We used brainstorming for idea generation of various features
                that the solution could include. These were written down on
                post-it notes, which were then prioritized in an{" "}
                <a
                  href="https://www.nngroup.com/articles/prioritization-methods/"
                  target="_blank"
                >
                  impact-effort-matrix
                </a>
                .
              </p>
            </div>
            <img
              src={DFimpactEffortMatrix}
              alt="Prioritized ideas in an impact-effort-matrix."
            ></img>
          </div>
        </div>
      ),
    },
    {
      id: "section3",
      title: "LO-FI",
      subtitle: "From idea to a tested first prototype",
      content: (
        <div className="DF-section">
          <div>
            <h3>Lo-Fi</h3>
            <p>
              Each group member first created their own interpretation of the
              prioritized ideas by making Lo-Fi designs. After this, a new
              iteration of the same phase took place, where everyone in the
              group once again individually created digital wireframes inspired
              by the previous sketches. This was done to create common
              wireframes compiled from all individual sketches.
            </p>
            <div>
              <ImageCarousel
                className="carousel-container"
                images={carouselImages}
              ></ImageCarousel>
            </div>
          </div>
          <div className="section-section">
            <h3>Wireframes</h3>
            <p>
              After the second individual iteration, a joint iteration was
              conducted where wireframes were created based on what we liked
              from our proposals. Below are some of them:
            </p>
            <div className="image-grid">
              {LoFiImages.map((src, index) => (
                <img
                  className="grid-images"
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div>
            <h3>Testing of Wireframes</h3>
            <p>
              The testing was conducted with the clients and supervisors at
              Knightec and was designed to capture their initial reactions.
              <br />
              <br />
              The testing resulted in several changes:
            </p>
            <ul>
              <li>It should be possible to combine tags in the filtering.</li>
              <li>The banner on the personal profile should be an image.</li>
              <li>Randomize who appears on the homepage.</li>
              <li>
                One should be able to search for different titles, such as
                senior consultant or team manager.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "section4",
      title: "HI-FI",
      subtitle: "The final Hi-Fi prototype in Figma.",
      content: (
        <div className="DF-section">
          <p>
            The HiFi prototype was created in Figma. The design is based on the
            updated wireframes and adds color and shape as well as some extra
            functionality that emerged during testing.
          </p>
          <div className="">
            <h3>Graphic profile</h3>
            <p>
              The graphic profile is inspired by Knightec's current website and
              Instagram feed:
            </p>
            <div className="DF-split-view">
              <img
                src={DFKnightecInstagram}
                alt="Screenshots from Knightecs instagram."
              ></img>
              <img
                src={DFKnightecWebsite}
                alt="Screenshot from Knightecs website."
              ></img>
            </div>
            <div className="DF-text-and-image">
              <div>
                <p>
                  Fonts and other styling were taken from the website when
                  possible. The color palette mainly consists of white and
                  black, with a lot of images, primarily of nature. Therefore,
                  white and black were chosen as the primary/neutral colors of
                  the design, with a slight tone down to avoid high contrast
                  that wouldn't align with accessability standards. Nature
                  images were sourced from Knightec's website as well as various
                  free platforms. Components such as buttons and the navigation
                  bar were imitated to create consistency between the photo wall
                  complement and the rest of the company’s graphic identity.
                  <br />
                  <br />
                  Additionally, we chose to add a gray and a purple to have more
                  color to work with to highlight certain aspects. To denote
                  destructive actions such as delete, a slightly toned-down red
                  color was selected. Generally, the buttons are black, but
                  these extra colors help guide the eye to the right place
                  during processes. Also, it's easier for the user to understand
                  the meaning of the button with color and not just words.
                </p>
              </div>
              <img
                src={DFGraphicProfile}
                alt="The graphical profile inspired by Knightecs graphical identity."
              ></img>
            </div>
            <div className="DF-text-and-image">
              <img
                src={DFIcons}
                alt="The graphical profile inspired by Knightecs graphical identity."
              ></img>
              <div>
                <p>
                  The only icon that could be taken from Knightec's own website
                  was a "down arrow." This was then used to create a "back
                  arrow" and a "remove cross." The remaining icons were sourced
                  from an icon library and modified to appear more uniform.
                  Different versions of each icon were developed to select the
                  one that feels most relevant for the purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="section-section">
            <h3>Testning of the Hi-Fi prototype</h3>
            <p>
              The testing was conducted on-site with the client (who had been
              involved throughout the entire process) and a graduate student in
              UX (who was completely new to the concept). The prototype was also
              sent to another group in the course who evaluated it based on{" "}
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                target="_blank"
              >
                10 Usability Heuristics for User Interface Design av Jakob
                Nielsen
              </a>
              .
              <br />
              <br />
              This feedback led to some modifications. The most significant
              changes are visualized below, where green marks the new and red
              marks the old:
            </p>
            <div className="image-grid">
              {HiFiChangesImages.map((src, index) => (
                <img
                  className="grid-images"
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="section-section">
            <h3>Final Hi-Fi</h3>
            <a href="https://www.figma.com/proto/ChfODED8YAIHhoZB7INNGf/Digital-Fotov%C3%A4gg?node-id=377-3971&node-type=canvas&t=QzIQgLg49YoH5Sbj-1&scaling=min-zoom&content-scaling=fixed&page-id=365%3A3118&starting-point-node-id=377%3A3971&show-proto-sidebar=1">
              Link to prototype in Figma here!
            </a>
            <img
              src={DFFinalHiFi}
              alt="The graphical profile inspired by Knightecs graphical identity."
            ></img>
          </div>
        </div>
      ),
    },
    {
      id: "section5",
      title: "DEVELOPMENT",
      subtitle: "The development of the touch screen view in Next.js.",
      content: (
        <div className="DF-section">
          <p>
            The development of the design is now taking place in the HT24
            project course, which was planned by one of the group members during
            a summer job at Knightec last summer. The touch view is being
            developed using Next with TypeScript, SaSS and a Supabase
            database for testing. This project course, worth 7.5 hp, is
            currently ongoing, so stay tuned for further updates...
          </p>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTS",
      subtitle: "Coming soon.",
      content: (
        <div className="DF-section">
          <p>
            <i>
              The project is being carried out together with my skilled group
              members and good friends: Ebba Backlund, Moa Berquist, Melker
              Henriksson, and Gustav Bolén!
            </i>
          </p>
        </div>
      ),
    },
    {},
  ];

  return (
    <div className="DF-container">
      <div className="DF-hero-container">
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
export default DF;

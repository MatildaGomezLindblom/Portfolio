import "../../styles/DF.scss";
import "../../styles/ProjectGlobal.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import ImageCarousel from "./Carousel";
import { FaGithub } from "react-icons/fa";
import DFPhotoWallFront from "../../assets/projects/DF/DFPhotoWallFront.png";
import DFPhotoWallBackside from "../../assets/projects/DF/DFPhotoWallBackside.png";
import Footer from "../footer";

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

import DFdbTable from "../../assets/projects/DF/dbTable_photoWall_light.png";

function DF() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Digital Photo Wall",
    subtitle:
      "A digital and interactive complement to Knightec's physical photo wall.",
    sections: [
      {
        heading: "Challenge",
        text: "Create digital version of Knightec’s analog photo wall, reinforcing the company’s tech-forward identity and strengthening the sense of community in the office.",
      },
      {
        heading: "Solution",
        text: "A web application with both an admin version and a public interface allowing users to see information about all office employees, sort and filter by different groups, and share updates about events and activities.",
      },
    ],
    buttonText: "Jump to the results",
    additionalInfo: [
      {
        heading: "Context",
        text: "Group project during two courses; Produktutveckling i medieteknik med metoden Design-Build-Test (2023) and Avancerat kvalitetsprojekt inom Interaktionsteknik (2024)",
      },
      {
        heading: "Resources",
        text: "Design 15 weeks at 25 % and 8 weeks of development 50 %, in a group of 5, supervised by Knightec.",
      },
      {
        heading: "Tools",
        text: "Figma, VS Code, Next, DevOps, Supabase.",
      },
    ],
    role: {
      heading: "My role and tasks",
      tasks: [
        "UX/UI design and user testing",
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
      subtitle: "A thorough design process.",
      content: (
        <div className="DF-section">
          <div className="design-overview">
            <div className="design-overview-content">
              <img id="idea" src={idea}></img>
              <img id="arrowDownRight" src={arrowDownRight}></img>
              <img id="DFLoFiPreview" src={LoFiExampleDF}></img>
              <img id="arrowUpRight" src={arrowUpRight}></img>
              <img id="DFHiFiPreview" src={HiFiExampleDF}></img>
            </div>
          </div>
          <p className="section-section close-top">
            We connected with a team at Knightec who wanted us to digitalize
            their office's physical photo wall that features employee photos
            that flip to reveal self-written introductions. Their idea was to
            create a digital version with the same purpose, enhanced by added
            functionality and interactivity.
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
        </div>
      ),
    },
    {
      id: "section2",
      title: "PRESTUDY",
      subtitle: "Project preparations and a deep dive into the problem area.",
      content: (
        <div>
          <div>
            <div className="section-section close-top">
              <h3>Market Analysis</h3>
              <p>
                After a planning phase involving a SWOT analysis and a GANTT
                chart, we conducted a market analysis where each team member
                researched similar services. We gathered images and links to
                create inspiration boards.
                <br />
                <br />
                While many companies use large screens to display employee
                photos, we found no digital solution that matched the client’s
                vision. We explored HR platforms and office display solutions
                showcasing employee recognition and achievements, which helped
                shape the project’s direction.
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
              To understand the users, the client provided use cases that helped
              us develop two key personas. One is a senior employee working
              remotely who struggles to stay updated on office happenings. The
              other is a younger newcomer or intern who wants to get to know
              colleagues and feel included at work.
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
              To gain the best possible insight into the target group, in
              addition to our two supervisors at Knightec, three other employees
              were also interviewed.
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
                Following discussions with the client, the service was defined
                as a fun internal complement to the existing photo wall, not an
                outward-facing tool. However, future development could expand
                its use to the lobby’s information screen. The goal is a
                feature-rich interface that includes team groupings, contact
                details, and workplace locations, designed to fit a larger
                computer monitor.
              </p>
            </div>
          </div>
          <div className="section-section">
            <div>
              <h3>Brainstorming and prioritazion</h3>
              <p>
                We used brainstorming where ideas were written down on post-it
                notes, which were then prioritized in an{" "}
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
      title: "Lo-Fi",
      subtitle: "The first prototype",
      content: (
        <div>
          <div className="section-section close-top">
            <h3>Lo-Fi</h3>
            <p>
              Each group member first created their own interpretation of the
              prioritized ideas by creating sketches, follwed by an iteration
              where everyone in the group individually created digital
              wireframes.
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
              After the second iteration, we combined our favorite ideas into
              shared wireframes. Some examples are shown below:
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
          <div className="section-section">
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
      title: "Hi-Fi",
      subtitle: "The final prototype in Figma.",
      content: (
        <div>
          <div>
            <div className="section-section close-top">
              <h3>Graphic profile</h3>
              <p>
                The graphic profile is inspired by Knightec's current website
                and Instagram feed:
              </p>
            </div>
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
            <div className="section-section">
              <div>
                <p>
                  We based the design on Knightec’s existing website, using
                  fonts, nature imagery, and a primarily black-and-white palette
                  to maintain consistency and accessibility. To avoid harsh
                  contrast, we slightly toned down the colors. For visual
                  hierarchy and clearer UI signals, we added a soft gray, a
                  purple for highlights, and a muted red for destructive
                  actions. Buttons are generally black, but color is used
                  strategically to guide the user and clarify intent.
                </p>
              </div>
              <img
                src={DFGraphicProfile}
                alt="The graphical profile inspired by Knightecs graphical identity."
              ></img>
            </div>
            <div className="text-and-image">
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
                </p>
              </div>
            </div>
          </div>
          <div className="section-section">
            <h3>Testning the Hi-Fi</h3>
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
        <div className="section-section close-top">
          <p>
            The development took place during a project course and was planned
            by one of the group members during a previous summer job at
            Knightec. The goal was to develop a first prototype of the touch
            view, as a foundation that Knightec could keep building on. This was
            done using Scrum, in 5 sprints of two weeks each and maintained
            through DevOps and Git:
            <br />
            <br />
            <b>Sprint 1</b>
            <br />
            Planning project and database structure, setting up DevOps,
            researching new tools and frameworks.
            <br />
            <br />
            <b>Sprint 2</b>
            <br />
            Creating all components for the main page and setting up the
            supabase services.
            <br />
            <br />
            <b>Sprint 3</b>
            <br />
            Assemling the main page and implementing sorting, searching and
            filtering functionality, as well as creating the page for posts and
            the calendar.
            <br />
            <br />
            <b>Sprint 4</b>
            <br />
            Making the page to handle groups and functionality to create, delete
            and update groups.
            <br />
            <br />
            <b>Sprint 5</b>
            <br />
            Testing, bug fixes, documentation and pitch preperations.
            <br />
            <br />
            <mark>
              Since the project belongs to Knightec we are unable to share any
              code. Instead, I have provided a brief overview of the key
              features and development decisions made throughout the project:
            </mark>
          </p>
          <h3>Next.js</h3>
          <p>
            Next.js, built on React, was a natural choice for our team and
            offered key advantages like hybrid rendering, simplified routing,
            prefetching, and image optimization. These features were especially
            valuable given the image-heavy nature of the photo wall, helping
            ensure smooth performance and fast page loads."
          </p>
          <h3>Sass for styleing</h3>
          <p>
            Next.js supports Sass, which we used for efficient and scalable
            styling. Sass variables made it easy to manage colors and fonts,
            ensuring the design can be easily updated as the project evolves.
          </p>
          <h3>Supabase database</h3>
          <p>
            Although Knightec didn’t require a backend, we set up a Supabase
            with dummy data to test all functionality. Supabase is an open
            source alternative to Googles Firebase and is built upon PostgreSQL.
            Supabase also supports real-time updates, serverless functions, and
            automated security settings, making it possible to build and scale
            applications efficiently and quickly.
            <br />
            <br />
            The database currently holds data on users, posts/events, and
            groups. To enhance retrieval speed and efficiency, user data is
            divided into three distinct tables. The main User table stores
            information necessary for displaying the user grid and supports
            filtering and sorting functionality. Personal and professional
            profile details are stored separately in their own tables, allowing
            them to be fetched discreetly in the background as needed.
          </p>
          <img src={DFdbTable} alt="Overview of the database tables."></img>
          <h3>SMHI for weather</h3>
          <p>
            To get the current header SMHI's API was used. Every 10 minutes the
            weather for the set coordinates are fetched and an appropriate icon
            for the weather is set in the header of the application, together
            with the temperature.
          </p>
          <h3>Big Calendar</h3>
          <p>
            Big Calendar is an open-source component built for React. The
            component offers extensive functionality and can be customized as
            needed. For this project, a custom toolbar was created, events were
            made clickable to display a popup, and the entire calendar was
            restyled to match the desired design.
          </p>
          <h3>Hashing for random user display</h3>
          <p>
            A key feature of the photo wall is to display office members in a
            random order each day, preventing the same people from always
            appearing at the top. Initially, we considered randomizing the order
            on each page load, but this could be frustrating for users and would
            require a reload to refresh the display. Instead, we implemented a
            hash function that uses the current date to generate a consistent,
            seemingly random order that remains the same throughout the day,
            ensuring a new arrangement each day.
          </p>
          <h3>Inactivity timeout</h3>
          <p>
            In response to feedback from Knightec, we implemented an inactivity
            timeout/reset feature. This feature restarts a background timer
            whenever a user interacts with the application and resets the
            application when the timer expires. This approach ensures that the
            main page is primarily displayed, enhancing user experience by
            keeping the content relevant and up-to-date.
          </p>
          <h3>Filtering, searching and sorting</h3>
          <p>
            To enhance users' ability to find people and groups, we implemented
            functionality for searching, filtering, and sorting. This was
            primarily achieved through URL queries and by toggling the
            visibility of matching items. Since multiple filters, as well as
            both sorting and filtering can be used at the same time, these were
            some of the more challangeing features to implement.
          </p>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTS",
      subtitle: "Demo of our fully functional touch screen version!",
      content: (
        <div className="section-section close-top">
          <iframe
            src={`https://www.youtube.com/embed/6wopBi77xsk`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ),
    },
    {
      id: "section6",
      title: "MY CONTRIBUTION",
      subtitle: "And some final thougths.",
      content: (
        <div>
          <div className="section-section close-top">
            <p>
              During the design process, we collaborated closely, except for the
              individual low-fidelity sketches, where I contributed "Version 1"
              shown above. In the final Figma design, my main focus was on the
              sidebar with events and filtering, the event display, the
              calendar, and the temporary groups.
              <br />
              <br />
              During development, we collaborated closely on Discord to assist
              each other, working together on all aspects of the project. This
              makes it difficult to attribute specific parts to any one person.
              However, my primary contributions included the events carousel,
              the styling and functionality of the calendar, the inactivity
              timeout, and the search field. Additionally, I implemented all
              aspects of the sidebar on the group page and ensured the
              functionality for selecting users for a group worked seamless.
              <br />
              <br />
              This has been a long project in the making, as well as a rewarding
              one since it was the first "real world" product we got to both
              design and develope. It was fun to work with a real client and
              target group, and to work with new frameworks and tools. The group
              worked well together and through effort and teamwork we created
              something to be proud of.
            </p>
          </div>
          <div className="section-section">
            <h3>Opportunities for improvement</h3>
            <p>
              While we conducted some interviews and user tests, a larger sample
              could have provided clearer insights. We made minor design
              adjustments before development, but more time would’ve allowed for
              deeper iteration.
              <br />
              <br />
              Our prior experience helped us avoid major pitfalls, though we
              realized too late that some issues only appeared during builds,
              not compiles. We improved our workflow mid-project by building
              before every merge, something we’ll implement earlier next time.
              With more time, we would have tested edge cases, improved error
              handling, and optimized data caching.
              <br />
              <br />
              Still, the goal was a prototype, and we delivered a robust and
              functional one. I’m proud of what we achieved with the resources
              we had! :D
            </p>
            <p>
              <i>
                The project was carried out together with my skilled group
                members and dear friends: Ebba Backlund, Moa Berquist, Melker
                Henriksson, and Gustav Bolén!
              </i>
            </p>
          </div>
          <div className="space"></div>
        </div>
      ),
    },
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
      <Footer></Footer>
    </div>
  );
}
export default DF;

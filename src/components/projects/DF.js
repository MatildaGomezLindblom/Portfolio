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

import DFdbTable from "../../assets/projects/DF/dbTable_photoWall_light.png";

function DF() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Digital photo wall",
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
        text: "Group project during two courses; Produktutveckling i medieteknik med metoden Design-Build-Test (2023) and Avancerat kvalitetsprojekt inom Interaktionsteknik (2024)",
      },
      {
        heading: "Resources",
        text: "Design 15 weeks at 25 % in a group of 5 people (approximately the scope of a master thesis) and 8 weeks of development 50 % 7,5 hp, supervised by Knightec.",
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
          <p>
            While exploring exciting projects for the course, we connected with
            a team at Knightec who proposed digitizing their office's physical
            photo wall. The wall features employee photos that flip to reveal
            self-written introductions. Their idea was to create a digital
            version with the same purpose, enhanced by added functionality and
            interactivity.
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
        <div className="DF-section">
          <div>
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
                We found many companies using large screens to display employee
                photos but no digital solution matching the client's vision. HR
                platforms showcasing employees in various ways were explored,
                along with office screens highlighting employee recognition,
                achievements, and social media, which inspired the project's
                direction.
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
              service, the client provided various use cases that
              formed the basis for two personas we found particularly
              interesting to keep in mind. The first is for a more experienced
              employee who is currently working remotely and finds it a bit
              challenging to keep up with changes at the office from home. The
              second one is younger and represents newcomers to the workplace as
              well as interns. This is a person who wants to use the service to
              get to know colleagues and feel included in the workplace.
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
      title: "Lo-Fi",
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
      title: "Hi-Fi",
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
            The development took place during a project course called Avancerat
            kvalitetsprojekt inom Interaktionsteknik, and was planned by one of
            the group members during a summer job at Knightec. The goal was to
            develop a first prototype of the touch view, as a foundation that
            Knightec could keep building on. This was done using Scrum, in 5
            sprints of two weeks each and maintained through DevOps and GIT:
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
            Next.js is a React framework designed for building fast, scalable
            web applications. Its foundation in React made it familiar to the
            team, but it also introduced valuable enhancements. With hybrid
            rendering capabilities (both client and server-side), Next.js
            enables faster page loads. It also simplifies route management and
            includes features like prefetching and image optimization. Given
            that the photo wall contains numerous images and various components
            on each page, efficient rendering is crucial to ensure a smooth user
            experience. These features made Next.js an ideal choice for this
            project.
          </p>
          <h3>Sass for styleing</h3>
          <p>
            Next.js supports Sass, a CSS library that enhances styling with
            features like global variables, nesting, and modularization. These
            capabilities make styling more efficient and scalable, which is
            crucial since this project is intended for future expansion by
            Knightec. We primarily utilized Sass variables to simplify future
            adjustments to the color scheme and fonts, ensuring easy updates as
            the design evolves.
          </p>
          <h3>Supabase database</h3>
          <p>
            Knightec didn't request a backend with the prototype but we decided
            to set up a Supabase with dummy data to be able to implement and
            test all the functionality we wished for. Supabase is an open source
            alternative to Googles Firebase and is built upon PostgreSQL.
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
        <div className="DF-section">
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
          <div className="DF-section">
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
          <div className="DF-section">
            <h3>Opportunities for improvement</h3>
            <p>
              Regarding the design we could have done even more interviews and
              user testings. Since our sample was quite small it was difficult
              to get clear conclusions which resulted in us mostly following our
              supervisors opinions. We did do a quick redesign before starting
              the development process where we changed some minor things, but as
              always, even more time could have made it even better!
              <br />
              <br />
              Our prior experiences helped us avoid many pitfalls during
              development. However, we should have started building the project
              earlier since some errors did not show up during regular
              compiling. Midway, we began building before every
              merge with main, a practice we’ll adopt earlier next time. Better planning
              of smaller components to make them more resuable could have saved
              time, avoiding rework like adapting the search field for light and
              dark themes later in the project. With more time, we would have
              tested edge cases, improved error handling, and optimized data
              caching.
              <br />
              <br />
              Ultimately, Knightec requested a prototype, not a finished
              product. By balancing thoroughness and efficiency, we delivered a
              large, functional prototype for them to develop further and I'm
              very proud of what we managed to accomplish with our given
              resourses :D
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
    </div>
  );
}
export default DF;

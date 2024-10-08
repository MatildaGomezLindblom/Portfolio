import "../../styles/Memosphere.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import memospherePriorities from "../../assets/projects/Memosphere/MemospherePriorities.png";
import arrowUpRight from "../../assets/projects/Hotspot/arrowUpRight.png";
import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
import idea from "../../assets/projects/Hotspot/Idea.png";
import HiFiExampleMemosphere from "../../assets/projects/Memosphere/HiFiExampleMemosphere.png";
import loFiExampleMemosphere from "../../assets/projects/Memosphere/loFiExampleMemosphere.png";
import LoFiSketchMemosphere from "../../assets/projects/Memosphere/LoFiSketchMemosphere.png";
import memosphereVersion2 from "../../assets/projects/Memosphere/memosphereVersion2.png";
import memosphereVersion3 from "../../assets/projects/Memosphere/memosphereVersion3.png";
import memosphereVersion1 from "../../assets/projects/Memosphere/memosphereVersion1.png";
import memosphereVersion4 from "../../assets/projects/Memosphere/memosphereVersion4.png";

import flowchartMemosphere from "../../assets/projects/Memosphere/flowchartMemosphere.png";

import memosphereHiFi1 from "../../assets/projects/Memosphere/memosphereHiFi1.png";
import memosphereHiFi2 from "../../assets/projects/Memosphere/memosphereHiFi2.png";
import memosphereHiFi3 from "../../assets/projects/Memosphere/memosphereHiFi3.png";
import memosphereHiFi4 from "../../assets/projects/Memosphere/memosphereHiFi4.png";
import memosphereHiFi5 from "../../assets/projects/Memosphere/memosphereHiFi5.png";
import memosphereHiFi6 from "../../assets/projects/Memosphere/memosphereHiFi6.png";
import memosphereHiFi7 from "../../assets/projects/Memosphere/memosphereHiFi7.png";
import memosphereHiFi8 from "../../assets/projects/Memosphere/memosphereHiFi8.png";
import memosphereHiFi9 from "../../assets/projects/Memosphere/memosphereHiFi9.png";
import memosphereHiFi10 from "../../assets/projects/Memosphere/memosphereHiFi10.png";
import memosphereHiFi11 from "../../assets/projects/Memosphere/memosphereHiFi11.png";
import memosphereHiFi12 from "../../assets/projects/Memosphere/memosphereHiFi12.png";
import memosphereHiFi13 from "../../assets/projects/Memosphere/memosphereHiFi13.png";
import memosphereHiFi14 from "../../assets/projects/Memosphere/memosphereHiFi14.png";

import memosphereHomeScreen from "../../assets/projects/Memosphere/memosphereHomeScreen.png";
import memosphereMoodboard from "../../assets/projects/Memosphere/memosphereMoodboard.png";
import memosphereGraphicProfile from "../../assets/projects/Memosphere/memosphereGraphicalProfile.png";
import memosphereCreateWeekScreen from "../../assets/projects/Memosphere/memosphereCreateWeekScreen.png";
import databaseMemosphere from "../../assets/projects/Memosphere/databaseMemosphere.png";

import memosphereCreateWeekScreen2 from "../../assets/projects/Memosphere/memosphereCreateWeekScreen2.png";
import memosphereProfileScreen from "../../assets/projects/Memosphere/memosphereProfileScreen.png";
//import memosphereGraphicProfile from "../../assets/projects/Memosphere/memosphereGraphicalProfile.png";

import ImageCarousel from "./Carousel";
import { FaGithub } from "react-icons/fa";

function Memosphere() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Memosphere",
    subtitle:
      "Stay in touch with loved ones in an exciting and unique way using AI.",
    sections: [
      {
        heading: "Challenge",
        text: "Design and develop a mobile application using some type of new technology on the theme: 'Ensure that family, friends & professionals who care for seniors receive the support they need?'.",
      },
      {
        heading: "Solution",
        text: "An AI-driven mobile application aimed at strengthening the relationship between seniors and their loved ones by encouraging weekly contact where they share weekly updates.",
      },
    ],
    buttonText: "Jump to Results",
    additionalInfo: [
      {
        heading: "Context",
        text: "Group project 2023 in the course Innovativa mobila tjänster och system.",
      },
      {
        heading: "Resources",
        text: "5 weeks 30% in a group of 6 people, with guidance from Daresay.",
      },
      {
        heading: "Tools",
        text: "Figma, VS Code, React Native, OpenAI, Firestore.",
      },
    ],
    role: {
      heading: "My Role and Tasks",
      tasks: [
        "UX/UI design",
        "User testing of prototypes",
        "Design and set up database",
        "Service layer for the database",
        "Publishing flow",
        "Research on OpenAI",
      ],
    },
  };

  const images = [
    {
      src: memosphereVersion1,
      legend:
        "In version 1, users float freely on the home screen in a space setting, similar to the game Among Us. When creating a weekly update, users receive 3 suggestions for inspiration.",
    },
    {
      src: memosphereVersion2,
      legend:
        "In version 2, users are scattered on the home screen, and a personally generated question is asked to the user in the weekly update.",
    },
    {
      src: memosphereVersion3,
      legend:
        "Version 3 features each user having their own house where the weekly updates are displayed.",
    },
    {
      src: memosphereVersion4,
      legend:
        "In version 4, users can choose clothes for their avatar, displayed similarly to Nintendo's Mii's on the home screen.",
    },
  ];

  const hiFiImages = [
    memosphereHiFi1,
    memosphereHiFi2,
    memosphereHiFi3,
    memosphereHiFi4,
    memosphereHiFi5,
    memosphereHiFi6,
    memosphereHiFi7,
    memosphereHiFi8,
    memosphereHiFi9,
    memosphereHiFi10,
    memosphereHiFi11,
    memosphereHiFi12,
    memosphereHiFi13,
    memosphereHiFi14,
  ];

  const sections = [
    {
      id: "section1",
      title: "DESIGN",
      subtitle: "From idea to design in the blink of an eye.",
      content: (
        <div>
          <div>
            <p>
              We wanted to utilize AI, which led us to the idea of creating an
              application where users share their week with family and friends.
              Each week, users can upload a picture from the past week or
              generate one using AI based on a prompt. The application will then
              use OpenAI's Vision (new feature at the time) and a database of
              questions to generate unique inspiration for the user. This makes
              each weekly summary unique and interesting.
              <br />
              <br />
              In the application, users can see their friends in an fun and
              innovative environment where, instead of viewing a list of
              friends, they see their friends' characters on an interactive
              canvas. This is designed to provide a unique and playful touch.
              Users can navigate between their own profile and others' to view
              their weekly summaries.
              <br /> <br />
              We also considered incorporating other data from the user's
              device, such as health data, to ask more personalized questions
              about this.
            </p>
            <img
              className="memosphere-storyboard"
              src={memospherePriorities}
              alt="functionality prioritized under must haves, want to haves and nice to haves."
            ></img>
            <div className="design-overview">
              <div className="design-overview-content">
                <img id="idea" alt="light bulb sketch" src={idea}></img>
                <img
                  id="arrowDownRight"
                  alt="arrow pointing down right"
                  src={arrowDownRight}
                ></img>
                <img
                  id="memosphereLoFiPreview"
                  alt="lo io preview of memosphere"
                  src={loFiExampleMemosphere}
                ></img>
                <img
                  id="arrowUpRight"
                  alt="arrow pointing up and right"
                  src={arrowUpRight}
                ></img>
                <img
                  id="memosphereHiFiPreview"
                  alt="hi fi preview of memosphere"
                  src={HiFiExampleMemosphere}
                ></img>
              </div>
            </div>
          </div>
          <div className="section-section">
            <h3>Lo-fi sketch</h3>
            <p>
              To determine an approximate layout for the app, a sketch was
              created collaboratively. This also laid ground for the foundation
              for our flow.
            </p>
            <img
              className="memosphere-storyboard"
              src={LoFiSketchMemosphere}
              alt="Lo-fi sketch with a few rough pages and some text and arrows."
            ></img>
            <img
              className="memosphere-storyboard"
              src={flowchartMemosphere}
              alt="flow chart of the memosphere app."
            ></img>
          </div>
          <div className="section-section">
            <h3>Mid-fi</h3>
            <p>
              When we had a common understanding of what was needed, everyone
              made one proposal each. Some chose to create sketches, while
              others created wireframes or more of a mid-fi design.
            </p>
            <div>
              <ImageCarousel
                className="carousel-container"
                images={images}
              ></ImageCarousel>
            </div>
          </div>
          <div className="section-section">
            <h3>Moodboard and graphic profile</h3>
            <p>
              We reviewed all the proposals together and decided to move forward
              with the space concept in version 1 as the foundation. We had many
              similar ideas that collectively inspired the final design.
            </p>
            <div className="mooadboard-graphicprofile-container">
              <img
                src={memosphereMoodboard}
                alt="Moodboard containing examples of apps and space like inspiration."
              ></img>
              <img
                src={memosphereGraphicProfile}
                alt="Graphic profile with typeface, color palette and different buttons."
              ></img>
            </div>
          </div>
          <div className="section-section">
            <h3>Hi-Fi</h3>
            <p>
              Based on the mood board, the graphic profile, and our collective
              proposals, we developed a hi-fi in Figma.
            </p>
            <div className="image-grid">
              {hiFiImages.map((src, index) => (
                <img
                  className="grid-images"
                  key={index}
                  src={src}
                  alt={` ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section2",
      title: "DEVELOPMENT",
      subtitle:
        "From Figma prototype to functional application with AI support in React Native and Firestore database.",
      content: (
        <div>
          <p>
            During development, we divided the work through a Kanban board via
            GitHub. We started by diving into a new technology each, then
            presented what we had learned to the rest of the group. After that,
            we began programming. We did a lot of coding individually, but also
            collaborated some towards the end.
          </p>
          <div className="section-section">
            <h3>Choice of AI model</h3>
            <p>
              We chose to use OpenAI because it is a user-friendly and
              relatively inexpensive solution that some group members had
              already used in previous projects. By the time we started our
              project, there had also been several updates to the service that
              we looked forward to utilizing! These were:
              <br />
              <br />
              <b>gpt-4-turbo:</b> a faster and cheaper version of gpt-4.
              <br />
              <br />
              <b>DALL-E 3:</b>an AI model for image generation that enhances the
              user's prompt when necessary to create even more detailed and
              creative images.
              <br />
              <br />
              <b>gpt-4-vision:</b> an advanced AI model that combines text and
              image processing to analyze images. It can understand and generate
              text based on visual insights, allowing it to analyze and answer
              questions about images, as well as create text that describes or
              relates to images (super cool!!).
            </p>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <h3>The database</h3>
              <p>
                Due to the limited time in the project, we chose to use a
                Firestore database since it was something we were familiar with
                from previous projects.
                <br />
                <br />
                <b>Users</b> holds all user information, including the color of
                their character's spacesuit and a profile picture for a more
                personal touch.
                <br />
                <br />
                <b>Friends</b> keeps track of all the user's friends and friend
                requests.
                <br />
                <br />
                <b>Weeks</b> contains information about the weekly updates for
                all users.
                <br />
                To retrieve and manage information from the database, a service
                layer was created.
              </p>
            </div>
            <div>
              <img
                src={databaseMemosphere}
                alt="Visualisation of the databasestructure."
              ></img>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <img
                src={memosphereHomeScreen}
                alt="Homescreen with avatars in space and some buttons."
              ></img>
            </div>
            <div>
              <h3>Hemskärm med användare i rymdsetting</h3>
              <p>
                The home screen displays you and your friends as space avatars.
                You can choose a profile picture and a color for your avatar.
                Currently, there are four colors available, but more can be
                added. The avatars appear randomly, and your own avatar is
                slightly larger and always centered. You can freely move the
                avatars around the screen, and by clicking on an avatar, you
                navigate to that person's profile and weekly flow.
                <br />
                <br />
                The menu button offers three options: settings, manage friends,
                and a whistle. These features are not implemented, but the idea
                for the whistle was to gather all friends' avatars in an
                organized manner.
                <br />
                <br />
                The "create week" button leads to the publishing flow.
              </p>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <h3>Selecting the image of the week</h3>
              <p>
                To create a week, you can take a personal photo from your camera
                roll or directly with the camera, or generate one using AI. For
                personal photos, the expo-picker was used, and for generating
                images, DALL-E 3 from OpenAI was utilized.
                <br />
                <br />
                To generate an image, the user submits a prompt, which is then
                sent to OpenAI, which responds with an image. While an image is
                being generated, the user sees a loading screen with explanatory
                text and a small space-themed animation to enhance the user
                experience and reduce perceived wait time.
              </p>
            </div>
            <div>
              <img
                src={memosphereCreateWeekScreen}
                alt="Initial screens for creating a new week."
              ></img>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <img
                src={memosphereCreateWeekScreen2}
                alt="Initial screens for creating a new week."
              ></img>
            </div>
            <div>
              <h3>Writing the week description</h3>
              <p>
                When the user selects an image, it is sent to OpenAI's API,
                which analyzes it to generate inspiration for the user. For this
                analysis, the newly released feature gpt-4-vision is used, a
                model that can understand and generate text based on visual
                insights. For this model, we sent the image along with the
                following prompt:
                <br />
                <br />
                <i>
                  Can you generate three suggestions for captions to this image?
                  Respond in Swedish.
                </i>
                <br />
                <br />
                The user receives three suggested captions that can be inserted
                into the input field with a click, where they can be edited or
                extended.
                <br />
                <br />
                After that, the user can freely write about their week, and for
                this, three suggestions are randomly pulled from a database of
                inspiration.
              </p>
            </div>
          </div>
          <div className="section-section memosphere-text-and-image">
            <div>
              <h3>Profile Page</h3>
              <p>
                When an avatar is clicked, an overlay displays the profile's
                name, avatar, username, and a summary of the person's weeks. The
                recent weeks can be scrolled horizontally, but one can also
                click on <i>show all</i> to access a scrollable list of all
                weeks.
                <br />
                <br />
                Clicking on a week allows the user to see the complete weekly
                summary with text and image.
              </p>
            </div>
            <div>
              <img
                src={memosphereProfileScreen}
                alt="Initial screens for creating a new week."
              ></img>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTS",
      subtitle: "Demo video and link to the GitHub repo.",
      content: (
        <div className="section-section">
          <iframe
            src={`https://www.youtube.com/embed/fiObRnq3OsM`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <a href="https://github.com/OscarTideman/MemoSphere">
            {" "}
            <FaGithub /> GitHub repo here
          </a>
        </div>
      ),
    },
    {
      id: "section4",
      title: "MY CONTRIBUTION",
      subtitle: "And some concluding thoughts.",
      content: (
        <div>
          <div>
            <p>
              The idea and the initial sketch of the app were developed in
              group. After that, we created our own interpretations of the
              sketch; I made Version 1, which was shown earlier. In the Hi-Fi
              design, we collaborated a lot, but I primarily focused on the
              publishing flow. I was also responsible for researching OpenAI
              before we started using it.
              <br />
              <br />
              Since I had just worked with Firebase in the previous course, I
              took on the task of structuring and setting up the database, as
              well as creating a service layer. I also ensured that the app
              could handle images as base64, something we hadn't managed to do
              in a previous project.
              <br />
              <br />
              I created the component for buttons and progress dots for the
              publishing flow, and I worked extensively on compiling this flow
              towards the end. I also developed the component to display and
              gather inspiration for the input field, along with some smaller
              tasks like pop-ups and buttons.
              <br />
              <br />
              This project was particularly enjoyable because our group already
              had some knowledge from previous projects, which allowed us to
              take the time to make features well implemented. It was especially
              fun to utilize the new technology from OpenAI; Vision was
              surprisingly good! The most enjoyable aspect of this project was
              that I felt quite competent in what i was doing!
            </p>
          </div>
          <div className="section-section">
            <h3>Improvement opportunities</h3>
            <p>
              Due to the limited time, we couldn't create a fully functional
              application. We excluded login, friends, and other basic
              functionalities from our priority to focus on what felt new and
              exciting, which was a good choice.
              <br />
              <br />
              If we had more time, we would have liked to create a more dynamic
              background on the home screen—one that users could navigate
              within. We also considered allowing users to switch to themes
              other than space. Additionally, we wished to do more with the
              inspiration provided when writing about weeks. For instance, we
              thought the app could fetch health data to suggest ideas for
              summarizing the week, such as:{" "}
              <i>On Wednesday, I walked 15,000 steps to...</i>
              <br />
              <br />
              If we were to redo the project, I might have reviewed the design
              one more time to create a better solution for the profile pages.
              Design was never the focus in this project, but proper user
              testing would have been beneficial if more time had been
              available.
              <br />
              <br />
              Considering that Memosphere was created in a relatively short
              timeframe, I am very proud of the result. It was a highly
              educational project where we got to experiment with many new
              technologies and develop the skills we already possessed!
            </p>
            <p>
              <i>
                A huge thank you to my project teammates; Oscar Tideman, Lukas
                Nordangård, Joakim Lindfors, Moa Bergquist, and Linnéa Esberg!
              </i>
            </p>
          </div>
          <div className="space"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="memosphere-container">
      <div className="memosphere-hero-container">
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

export default Memosphere;

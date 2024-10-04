import "../../styles/Hotspot.scss";
import { useLayoutEffect } from "react";
import VerticalNavbar from "./VerticalNavbar";
import ProjectOverview from "./ProjectOverview";
import arrowUpRight from "../../assets/projects/Hotspot/arrowUpRight.png";
import arrowDownRight from "../../assets/projects/Hotspot/arrowDownRight.png";
import idea from "../../assets/projects/Hotspot/Idea.png";
import hotspotHiFiPreview from "../../assets/projects/Hotspot/HotspotHiFiPreview.png";
import hotspotLoFiPreview from "../../assets/projects/Hotspot/HotspotLoFiPreview.png";
import ImageCarousel from "./Carousel";
import hotspotVersion1 from "../../assets/projects/Hotspot/hotspotVersion1.png";
import hotspotVersion2 from "../../assets/projects/Hotspot/hotspotVersion2.png";
import hotspotVersion3 from "../../assets/projects/Hotspot/hotspotVersion3.png";
import hotspotFinalLoFi from "../../assets/projects/Hotspot/hotspotFinalLoFi.png";
import hotspotStoryboard from "../../assets/projects/Hotspot/hotspotStoryboard.png";
import hotspotMoodboard from "../../assets/projects/Hotspot/hotspotMoodboard.png";
import hotspotGraphicProfile from "../../assets/projects/Hotspot/hotspotGraphicProfile.png";
import hotspotHiFi from "../../assets/projects/Hotspot/hotspotHiFi.png";
import hotspotDatabase from "../../assets/projects/Hotspot/hotspotDatabase.png";
import { FaGithub } from "react-icons/fa";

function Hotspot() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const projectData = {
    title: "Hotspot",
    subtitle: "The app to pin and share your favorite places.",
    sections: [
      {
        heading: "Challenge",
        text: "Design and develop an interactive prototype of a mobile application, with extra focus on accessibility. We chose to solve the problem of finding hidden gems in a smooth and reliable way.",
      },
      {
        heading: "Solution",
        text: "An app with user management and an integrated map where users can create pins for their favorite places with comments shared among the user's friends.",
      },
    ],
    buttonText: "Jump to the result",
    additionalInfo: [
      {
        heading: "Context",
        text: "Group project 2023 in the course Prototyputveckling för mobila applikationer.",
      },
      {
        heading: "Resources",
        text: "5 weeks 50% in a group of 5 people.",
      },
      {
        heading: "Tools",
        text: "Figma, VS Code, React Native.",
      },
    ],
    role: {
      heading: "My role",
      tasks: [
        "UX/UI design",
        "User testing of prototypes",
        "Designing and setting up the database",
        "Service layer for the database",
        "Friends page",
        "Search function for friends",
      ],
    },
  };

  const images = [
    {
      src: hotspotVersion1,
      legend:
        "In version 1, the 'add pin' function has its own button in the navbar, and the friends page is located on the profile page.",
    },
    {
      src: hotspotVersion2,
      legend:
        "In version 2, 'add pin' is a floating button, which makes room for friends in the navbar.",
    },
    {
      src: hotspotVersion3,
      legend:
        "Version 3 has a navbar that changes functionality depending on which page the user is on.",
    },
  ];

  const sections = [
    {
      id: "section1",
      title: "DESIGN",
      subtitle: "From idea to tested hi-fi in Figma in a week.",
      content: (
        <div>
          <div>
            <p>
              The idea was to create an application that allows users to pin
              locations on the map, both for their own benefit and to create a
              recommendation system for friends and family that would be more
              trustworthy than Google reviews for example.
            </p>
            <div className="design-overview">
              <div className="design-overview-content">
                <img id="idea" src={idea}></img>
                <img id="arrowDownRight" src={arrowDownRight}></img>
                <img id="hotspotLoFiPreview" src={hotspotLoFiPreview}></img>
                <img id="arrowUpRight" src={arrowUpRight}></img>
                <img id="hotspotHiFiPreview" src={hotspotHiFiPreview}></img>
              </div>
            </div>
          </div>
          <div className="section-section">
            <h3>Storyboard</h3>
            <p>To visualize the user journey</p>
            <img
              className="hotspot-storyboard"
              src={hotspotStoryboard}
              alt="Storyboard showing Emilia who goes to a new city and uses the app Hotspot to find restaurant recomendations."
            ></img>
          </div>
          <div className="section-section">
            <h3>Lo-fi</h3>
            <p>
              We knew we needed a map with search and filtering functions, the
              creation and display of pins, profiles, and functionality to log
              in and out as well as to manage friends. Based on this, a lo-fi
              prototype was created in Figma. The biggest challenge was figuring
              out where all these components should be placed to make the
              navigation as intuitive as possible. Therefore, three versions
              were created and tested on six users.
            </p>
            <div>
              <ImageCarousel
                className="carousel-container"
                images={images}
              ></ImageCarousel>
            </div>
          </div>
          <div className="section-section hotspot-testing-results">
            <div>
              <h3>Results from user testing</h3>
              <p>
                The testing showed that it was not appreciated when the icon in
                the navbar changed depending on which page the user was on.
                Therefore, versions 1 and 2 were the favorites. We chose to
                continue with version 1 since the navigation resembled other
                popular apps like Instagram, with some adjustments based on
                feedback from the testing.{" "}
              </p>
              <p className="list-title">
                Some changes that were made were the following:
              </p>
              <ul>
                <li>
                  Only one map instead of separate ones for my pins and my
                  friends' pins.
                </li>
                <li>Settings in the top right corner of the profile.</li>
                <li>
                  Preview of friends in the profile, instead of just a button.
                </li>
              </ul>
            </div>
            <div>
              <img
                src={hotspotFinalLoFi}
                alt="finished lo-fi-proptotype after testing with friends under the users profile."
              ></img>
            </div>
          </div>
          <div className="section-section">
            <h3>Moodboard and graphic profile</h3>
            <p>
              Since our application would contain a map with pins as well as a
              lot of images, we chose to stick to a few colors and a light
              theme. We selected a muted red for highlighted elements like
              buttons, along with a beige-yellow as a complement to create a
              nice gradient.
            </p>
            <div className="mooadboard-graphicprofile-container">
              <img
                src={hotspotMoodboard}
                alt="Moodboard containing warm images of graphical interfaces and city locations."
              ></img>
              <img
                src={hotspotGraphicProfile}
                alt="Graphic profile with typeface, color palette and different button states."
              ></img>
            </div>
          </div>
          <div className="section-section">
            <h3>Hi-Fi</h3>
            <p>
              Based on the mood board, the graphic profile, as well as the
              updated low-fidelity prototype, a high-fidelity design was created
              in Figma. Below are some of the pages we made.
            </p>
            <img
              className="hotspotHiFi"
              src={hotspotHiFi}
              alt="5 of the screens of the final hi-fi prototype."
            ></img>
          </div>
        </div>
      ),
    },
    {
      id: "section2",
      title: "DEVELOPMENT",
      subtitle:
        "From Figma prototype to a semi-functional application with user management and map functionality in React Native, with a Firestore database.",
      content: (
        <div>
          <p>
            During the programming phase, we spent a lot of time together as a
            group in the beginning to plan and establish a unified structure for
            the project. We set up a Kanban board where everyone could take on
            their own tasks since we were working individually a lot. At the
            end, we spent a few days together to connect all the parts and
            finalize what had not been completed.
          </p>
          <div className="section-section">
            <h3>The database</h3>
            <p>
              We chose to use Firestore as the database for our project due to
              its scalability and simplicity, as well as its support for
              real-time updates. This was my first experience with a NoSQL
              database, which required some research to establish a database
              structure we were satisfied with. We considered two options for
              storing friend lists: either as part of the user document or as a
              separate collection. We decided to create a separate collection
              for friends. This improves performance and scalability by avoiding
              the need to read the entire user document each time we fetch a
              user's friend list, although it does make the queries a bit more
              complex.
              <br />
              <br />
              In the same way, we handle pins. We have a separate collection for
              user IDs that contains a subcollection for pins, where each
              document represents a user's pin. This structure facilitates the
              management and retrieval of pins while keeping the user documents
              more manageable.
            </p>
            <img
              src={hotspotDatabase}
              alt="Visualisation of the databasestructure."
            ></img>
          </div>
          <div className="section-section">
            <h3>The Map and Pins</h3>
            <p>
              The map and pins are central parts of Hotspot. For the map
              display, we use react-native-maps, which integrates with Google
              Maps on Android and Apple Maps or Google Maps on iOS. The current
              location is determined using expo-location, allowing the map to
              center on the user's position. To quickly search for and navigate
              to specific locations, we use
              react-native-google-places-autocomplete, which provides search
              suggestions as the user types.
              <br />
              <br />
              Pins on the map are placed during loading and represent both the
              user's own pins and their friends' pins from the database. Each
              pin has a unique color and icon based on its category, and the
              user can filter pins by category, such as beaches.
              <br />
              <br />
              When a user creates a pin, they add a picture, location,
              description, and title. The new pin is visible on both the user's
              and their friends' maps. Each pin is enriched with location
              information from the Google Places API. If multiple users within
              the same friendship group create pins at the same location, these
              will be grouped under a common pin, preventing multiple pins from
              being created for the same favorite spot.
            </p>
          </div>
          <div className="section-section">
            <h3>Users Management</h3>
            <p>
              To create an account in the app, the user needs to provide an
              email address, name, and password. The user also has the option to
              upload a profile picture from their camera roll. On their profile,
              the user can see their own information, a feed of their pins, and
              a preview of their friends. The user can also click to navigate to
              friends' profiles.
              <br />
              <br />
              When navigating to a friend's page, the application loads the
              user's friend list. Friend requests are displayed at the top of
              the page, with only one request shown initially. Below the friend
              requests, there is a list of the user's friends. The page includes
              a search box at the top where the user can search for usernames.
              When searching, matching friends are displayed first, followed by
              friends of friends, and lastly users who have no mutual friends
              with the searcher. The profile cards for friends show a picture,
              name, and any friendship status. The user can swipe on a card to
              quickly add or remove a friend, or click on the card to access a
              more detailed view with the same functionality.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTS",
      subtitle: "Demo video and link to GitHub repo.",
      content: (
        <div className="section-section">
          <iframe
            src={`https://www.youtube.com/embed/1zZFFfUX72g`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <a href="https://github.com/OlleStrandberg/Pumaproject">
            {" "}
            <FaGithub /> GitHub repo här
          </a>
        </div>
      ),
    },
    {
      id: "section4",
      title: "MY CONTRIBUTION",
      subtitle: "And some final thougths.",
      content: (
        <div>
          <div>
            <p>
              The design part was mostly done together, but my main focus was on
              the friends' page and buttons, which also became my focus during
              the development phase. It was an interesting page to work on as it
              included swipe animations, dropdowns, data loading, and a more
              advanced search function.
              <br />
              <br />
              I also took on the task of handling the database. Firebase was
              completely new to me, and it was a very rewarding challenge! I
              planned and presented the structure as well as creating a service
              layer and testing. During the final phase of the project, I
              ensured that the service layer was integrated with all pages in
              the application and that the data flowed smoothly between all
              components so that the application functioned as intended.
              <br />
              <br />
              The most enjoyable part of the project was that we, as a group,
              could create so much functionality in a short time thanks to our
              collaboration. I also had the chance to learn about NoSQL and
              Firebase, and my role gave me a pretty good overview of how
              everything would come together in the end.
            </p>
          </div>
          <div className="section-section">
            <h3>Improvement opportunities</h3>
            <p>
              Due to the limited time, combined with the fact that we were using
              some new frameworks, we did not manage to create a fully
              functional application. It still lacks many desired
              functionalities, such as filtering pins by friends or adding a
              friend directly from their profile page. There are also some bugs
              since we didn’t have time to test the application thoroughly at
              the end, as well as some warnings that appear in Expo; however,
              these don’t seem to affect functionality.
              <br />
              <br />
              If we were to redo the project, I would skip trying to fix Google
              Sign-In since it ultimately wasn’t compatible with Expo. I would
              also ensure that we made an even more detailed plan at the
              beginning to ensure that all parts fit together better in the end.
              Perhaps I would have omitted certain functionalities, such as
              login, to have time for testing at the end to eliminate even more
              bugs and warnings.
              <br />
              <br />
              Despite this, I am very proud of the result, and it was a very
              educational project!
            </p>
            <p>
              <i>
                Hotspot was done in collaboration with Vilma Christensen, Linnea
                Nilsson, Olle Strandberg and Malin Ramstedt.
              </i>
            </p>
          </div>
          <div className="space"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="hotspotContainer">
      <div className="hotspot-hero-container">
        <ProjectOverview projectData={projectData} />
      </div>
      <div className="contentContainer">
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

export default Hotspot;

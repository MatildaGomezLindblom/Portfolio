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
import Footer from "../footer";

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
        text: "Design and develop an interactive mobile application, with focus on accessibility. We chose to solve the problem of finding hidden gems in a smooth and reliable way.",
      },
      {
        heading: "Solution",
        text: "An app with user management and an integrated map where users can create pins for their favorite places with comments, shared among the user's friends.",
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
        "UX/UI design and user testing",
        "Designing and setting up the database with services",
        "Friends page with search functionality",
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
      subtitle: "From idea to tested hi-fi in a week.",
      content: (
        <div>
          <div>
            <p className="section-section close-top">
              The idea was to create an application that allows users to pin
              locations on the map, both for their own benefit and to create a
              recommendation system for friends and family that would be more
              trustworthy than Google reviews for example.
            </p>
            <div className="design-overview">
              <div className="design-overview-content">
                <img id="idea" alt="light bulb sketch" src={idea}></img>
                <img
                  id="arrowDownRight"
                  alt="arrow pointing down right"
                  src={arrowDownRight}
                ></img>
                <img
                  id="hotspotLoFiPreview"
                  alt="lo fi preview of hotspot"
                  src={hotspotLoFiPreview}
                ></img>
                <img
                  id="arrowUpRight"
                  alt="arrow pointing up and right"
                  src={arrowUpRight}
                ></img>
                <img
                  id="hotspotHiFiPreview"
                  alt="hi fi preview of hotspot"
                  src={hotspotHiFiPreview}
                ></img>
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
              Based on the basic components we knew we wanted, a lo-fi prototype
              was created in Figma. The biggest challenge was figuring out where
              these components should be placed to make the navigation as
              intuitive as possible. Therefore, three versions were created and
              tested on six users.
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
                the navbar changed depending on which page the user was on. We
                chose to continue with version 1 since the navigation resembled
                other popular apps like Instagram, with some adjustments based
                on feedback from the testing.{" "}
              </p>
              <p className="list-title">Some changes that were made:</p>
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
              Since the application would contain a map and images, we chose to
              stick to a few colors and a light theme. We selected a muted red
              for highlighted elements like buttons, along with a beige-yellow
              as a complement to create a nice gradient. Nunito and rounded
              buttons creats a friendly and fun feel.
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
            <p>A hi-fi design was then created in Figma.</p>
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
        "Creating an application with user management and map functionality in React Native, with a Firestore database.",
      content: (
        <div>
          <div className="section-section close-top">
            <h3>The database</h3>
            <p>
              We chose Firestore for its scalability, simplicity, and real-time
              support. As my first NoSQL experience, I researched how to
              structure the database and we opted to store friend lists in a
              separate collection to improve performance and scalability,
              despite slightly more complex queries.
              <br />
              <br />
              Similarly, we store pins in a subcollection under each user ID,
              keeping user documents lightweight and making pin management and
              retrieval more efficient.
            </p>
            <img
              src={hotspotDatabase}
              alt="Visualisation of the databasestructure."
            ></img>
          </div>
          <div className="section-section">
            <h3>The Map and Pins</h3>
            <p>
              The map with pins is the core of Hotspot. We use{" "}
              <b>react-native-maps</b>{" "}
              for map display, integrating with Google or Apple Maps depending
              on the platform. <b>expo-location</b>{" "} centers the map on the
              user's current location, while{" "}
              <b>react-native-google-places-autocomplete</b>{" "}
               enables fast, suggestion-based search.
              <br />
              <br />
              Pins on the map are placed during loading and represent both the
              user's and their friends pins. Each pin has a unique color and
              icon based on its category, in which they can be filtered by.
              <br />
              <br />
              When creating a pin, users add a title, description, location, and
              photo. Pins appear on both the user’s and their friends’ maps and
              are enriched with data from the Google Places API. To avoid
              duplicates, pins created at the same location within a friend
              group are grouped into one shared marker.
            </p>
          </div>
          <div className="section-section">
            <h3>Users Management</h3>
            <p>
              To sign up, users provide an email, name, password, and optionally
              upload a profile picture. Their profile displays personal info, a
              pin feed, and a friends preview, with the option to view others'
              profiles.
              <br />
              <br />
              On a friend's profile, users can see friend requests, a friend
              list, and a search box to find users. Search results are
              prioritized by connection: friends first, then friends of friends,
              and finally others.Each profile card shows a photo, name, and
              friendship status. Users can swipe to add/remove friends or tap to
              view full details and manage the connection.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "results",
      title: "RESULTS",
      subtitle: "Demo video!",
      content: (
        <div className="section-section" style={{ paddingTop: "0" }}>
          <iframe
            src={`https://www.youtube.com/embed/1zZFFfUX72g`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
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
            <p className="section-section close-top">
              The design part was mostly done together, but my main focus was on
              the friends' page, which also became my focus during the
              development phase. It was an interesting page to work on as it
              included swipe animations, dropdowns, data loading, and a more
              advanced search function.
              <br />
              <br />
              I also took on the task of handling the database. Firebase was
              completely new to me, and it was a very rewarding challenge! I
              planned and presented the structure and created a service layer +
              testing. During the final phase of the project, I ensured that the
              service layer was integrated with all pages in the application and
              that the data flowed smoothly between all components so that the
              application functioned as intended.
              <br />
              <br />
              The most rewarding part of the project was how much we
              accomplished in a short time through strong collaboration. I also
              gained hands-on experience with NoSQL and Firebase, and my role
              gave me a solid understanding of how all parts of the app fit
              together.
            </p>
          </div>
          <div className="section-section">
            <h3>Improvement opportunities</h3>
            <p>
              Due to time constraints and working with new frameworks, we didn’t
              manage to build a fully functional app. Features like filtering
              pins by friends or adding a friend from their profile are still
              missing, and some bugs and Expo warnings remain due to limited
              testing.
              <br />
              <br />
              In hindsight, we should have skipped trying to implement Google
              Sign-In (which wasn’t compatible with Expo) and made a more
              detailed plan early on to better align all parts of the project. I
              might also have deprioritized login to allow time for more
              thorough testing.
              <br />
              <br />
              Despite this, I am very proud of the result, and it was a very
              educational project!
            </p>
            <p>
              <i>
                Hotspot was done in collaboration with the amazing Vilma Christensen, Linnea
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
      <Footer></Footer>
    </div>
  );
}

export default Hotspot;

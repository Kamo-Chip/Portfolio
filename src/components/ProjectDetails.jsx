import React, { useState } from "react";
import { useParams } from "react-router";
import PhonePgg from "../images/phonepgg.png";
import MacCv from "../images/maccv.png";
import Wsb from "../images/macwsb.png";
import MacWeather from "../images/macweather.png";
import { useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import SkillsContainer from "./SkillsContainer";
import "../styles/ProjectDetails.css";

const ProjectDetails = () => {
  const { title } = useParams();

  const [imgSrc, setImgSrc] = useState("");
  const [header, setHeader] = useState("");
  const [purpose, setPurpose] = useState("");
  const [challenges, setChallenges] = useState("");
  const [link, setLink] = useState("");
  const [tools, setTools] = useState([]);

  const checkSource = () => {
    switch (title) {
      case "projektGreekGods":
        setImgSrc(PhonePgg);
        setPurpose(`I like to log my workouts - what exercises I did, how many reps I performed, how heavy the weights were, and so on.
                    I used the notes app on my phone to keep track of all this data and as you can imagine, it did not provide enough functionality to 
                    store this data in an effective and helpful manner. I looked for apps I could use to track my workouts, but they did not address the problems 
                    I had, so I made my own app and shared it with a few friends of mine to help them out too.`);
        setHeader("Projekt Greek Gods");
        setChallenges(`
        <li>User persistence</li>
        <li>Publishing the app to production using vercel</li>
        <li>Figuring out how to read from/write to firebase firestore and cloud storage</li>
        <li>Finding an effective way to structure data in a database</li>
        <li>Making the application's features intuitive</li>
        <li>Displaying help screens to aid the user</li>`);
        setLink(`https://projektgreekgods.vercel.app/`);
        setTools([
          "React",
          "Node",
          "Firebase",
          "JavaScript",
          "HTML",
          "CSS",
          "React Icons",
          "Context API",
          "GitHub",
          "Vercel",
        ]);
        break;
      case "diamondsInTheRough":
        setImgSrc(Wsb);
        setHeader("Diamonds In The Rough");
        setLink("https://diamonds-in-the-rough.vercel.app/");
        setPurpose(
          `The Wall Street Bets community on Reddit is now somewhat of a notorious group of financial speculators. I wondered if there was a way to track the stocks that they are talking about in the community, and as I have come to learn - anything is possible if you throw a bunch of APIs together. I get data from a third-party website which tracks the data, then I output it to my site, providing all the important information regarding financial instruments, which I get from an API, such as P/E ratios, charts, market cap, and so on.`
        );
        setChallenges(`
        <li>Figuring out how to use a web scraper with JavaScript</li>
        <li>Finding an effective charting library</li>
        <li>Figuring out how to display data on the chart</li>
        <li>Connecting to and getting data from the Alpha Vantage API</li>`);
        setTools([
          "Alpha Vantage API",
          "TradingView LightWeight Charts",
          "React",
          "JavaScript",
          "Node",
          "Express",
          "Puppeteer",
          "Firebase",
          "GitHub",
          "Vercel",
        ]);
        break;
      case "cvCreator":
        setImgSrc(MacCv);
        setHeader("CV Creator");
        setPurpose(
          `I struggled to find a suitable online CV creator, so I built one. This project was built partly as a means of praciticing using React.`
        );
        setChallenges(`
        <li>How to pass props across components</li>
        <li>How to add and delete data from props</li>
        <li>Converting class components to functional components</li>`);
        setLink("https://kamo-chip.github.io/CV-Creator/");
        setTools([
          "Devicon API",
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Node",
          "GitHub",
        ]);
        break;
      case "weatherApp":
        setImgSrc(MacWeather);
        setHeader("Weather App");
        setPurpose(`I was curious about how and where the weather app on my phone gets its data, so I went down a rabbit hole of APIs and found OpenWeatherAPI. I used it to create my own weather app. It can display the weather in all the countries around the world. `);
        setChallenges(`
        <li>How to get data from an API</li>
        <li>Using asynchronous JavaScript</li>
        <li>Communicating with OpenWeather API</li>`);
        setLink("https://kamo-chip.github.io/Weather-App/");
        setTools([
          "OpenWeather API",
          "JavaScript",
          "HTML",
          "CSS",
          "Node",
          "GitHub",
        ]);
        break;
      default:
    }
  };

  useEffect(() => {
    checkSource();
  }, []);

  return (
    <div className="project-details">
      <h1>{header}</h1>
      <div className="project-details-container">
        <img src={imgSrc} alt="phone" />
        <div style={{ fontFamily: "Arial" }} className="details-layout">
          <h2>Tech Stack and Tools</h2>
          <SkillsContainer skills={tools} />
          <h2>Purpose of Project</h2>
          <p>{purpose}</p>
          <h2>Challenges I Faced</h2>
          <ul dangerouslySetInnerHTML={{ __html: challenges }} />
          <h2>Link</h2>
          <a href={link} target="_blank" rel="noreferrer">
            {header}
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

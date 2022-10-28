import React from "react";
import PGG from "../images/pgg.png";
import CV from "../images/cv.png";
import WSB from "../images/wsb.png";
import Weather from "../images/weather.png";
import { Link } from "react-router-dom";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <Link to="project/projektGreekGods">
          <Project
            name="Projekt Greek Gods"
            image={PGG}
            color="#812fff"
            description="Workout logger for beginner to intermediate gym enthusiasts"
          />
        </Link>
        <Link to="project/diamondsInTheRough">
          <Project
            name="Diamonds In The Rough"
            image={WSB}
            color="#2fadff"
            description="Tracks and analyses trending stock mentions in the financial subreddit called WallStreetBets"
          />
        </Link>
        <Link to="project/cvCreator">
          <Project
            name="CV Creator"
            image={CV}
            color="#2fffab"
            description="Creates a CV based on the user's input. Provides beautiful
            customisability"
          />
        </Link>
        <Link to="project/weatherApp">
          <Project
            name="Weather App"
            image={Weather}
            color="#fe2fff"
            description="Displays up to date weather forecasts on any city in the world"
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import PGG from "../images/pgg.png";
import CV from "../images/cv.png";
import WSB from "../images/wsb.png";
import Weather from "../images/weather.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className='projects' id="projects">
      <h1>Projects</h1>
        <div className='projects-container'>
          <Link to="project/projektGreekGods">
            <div className='project'>
              <h2 style={{backgroundColor: "#ff2f44"}}>Projekt Greek Gods</h2>
              <div className='project-layout'>
                <img src={PGG} alt="projekt greek gods" style={{
                  objectFit: "cover", 
                  maxHeight: "300px",
                  width: "auto",
                  margin: "20px 0"
                  }}/>
                  <p style={{textAlign: "center", padding: ".5em 1em", fontSize: "1.2rem"}}>Workout logger for beginner to intermediate gym enthusiasts</p>
              </div>
            </div>
            </Link>
            <Link to="project/diamondsInTheRough">
            <div className='project'>
              <h2 style={{backgroundColor: "#41efff"}}>Diamonds In The Rough</h2>
              <div className='project-layout'>
                <img src={WSB} alt="Diamonds in the rough" style={{
                  objectFit: "cover", 
                  maxHeight: "300px",
                  margin: "20px 0"
                  }}/>
              </div>
              <p style={{textAlign: "center", padding: ".5em 1em", fontSize: "1.2rem"}}>Tracks and analyses trending stock mentions in the financial subreddit called WallStreetBets</p>
            </div>
            </Link>
            <Link to="project/cvCreator">
              <div className='project'>
                <h2 style={{backgroundColor: "#ea2fff"}}>CV Creator</h2>
                <div className='project-layout'>
                <img src={CV} alt="cv" style={{
                  maxHeight: "300px",
                  margin: "20px 0"
                  }}/>
                </div>
                <p style={{textAlign: "center", padding: ".5em 1em", fontSize: "1.2rem"}}>Creates a CV based on the user's input. Provides beautiful customisability.</p>
              </div>
            </Link>
            <Link to="project/weatherApp">
              <div className='project'>
                <h2 style={{backgroundColor: "#fc2626"}}>Weather App</h2>
                <div className='project-layout'>
                  <img src={Weather} alt="projekt greek gods" style={{
                    objectFit: "cover", 
                    maxHeight: "300px",
                    margin: "20px 0"
                    }}/>
                </div>
                <p style={{textAlign: "center", padding: ".5em 1em", fontSize: "1.2rem"}}>Displays up to date weather forecasts on any city in the world.</p>
              </div>
            </Link>
            <div className='project'>
              <h2 style={{backgroundColor: "#ffa31a", borderBottom: "solid #000 3px"}}>E-Commerce Site</h2>
              <div className='project-layout'>
                  <p style={{textAlign: "center", padding: ".5em 1em", fontSize: "1.2rem"}}>Coming soon</p>
              </div>

            </div>
        </div>
    </section>
  )
}

export default Projects
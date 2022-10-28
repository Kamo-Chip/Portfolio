import React from "react";
import Me from "../images/Me.jpg";
import SkillsContainer from "./SkillsContainer";
import "../styles/About.css";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Java",
    "Ruby",
    "PHP",
    "Git",
    "Firebase",
    "MongoDB",
    "SQL",
    "Node",
    "Express",
    "EJS",
  ];
  return (
    <section className="about" id="about">
      <div className="details-container">
        <div className="about-aside">
          <img
            src={Me}
            alt="A headshot of me"
            style={{
              height: "180px",
              alignSelf: "center",
              border: "solid #000 2px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="about-text">
          <h1>About</h1>
          <SkillsContainer skills={skills} />
          <div className="description">
            <p>
              I am an ambitious problem solver seeking new learning and growth
              opportunities. I have worked on multiple projects ranging from
              building full-stack web applications to crafting beautiful landing
              pages.
            </p>
            <p>
              I have always been interested in computers. My first obsession was
              making "art" in MS Paint. I quickly discovered that MS Paint was
              built with something called "code", and my love for creating
              things found itself a new outlet - programming.
            </p>
            <p>
              In the last few years, I have dedicated myself to becoming a
              professional developer. This dedication led me to start a club at
              my school where I taught my peers the fundamentals of programming.
              I have also completed several courses ranging from MOOCs (Massive
              Open Online Courses) to watching several hours of YouTube videos. I
              am confident in my ability to provide value through the software I
              create, and I am now looking to grow into more challenging
              positions. I would love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

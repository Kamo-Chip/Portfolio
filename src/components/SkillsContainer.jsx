import React from "react";
import "../styles/SkillsContainer.css";

const SkillsContainer = ({ skills }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, idx) => (
        <div key={Math.random() + idx}>{skill}</div>
      ))}
    </div>
  );
};

export default SkillsContainer;

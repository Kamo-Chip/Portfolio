import React from "react";

const SkillsContainer = ({ skills }) => {
  return (
    <div className="skills-container">
      {skills.map((skill) => (
        <div>{skill}</div>
      ))}
    </div>
  );
};

export default SkillsContainer;

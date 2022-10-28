import React from "react";
import "../styles/Projects.css";

const Project = ({ name, image, color, description }) => {
  return (
    <div className="project">
      <h2 style={{ backgroundColor: color }}>{name}</h2>
      <div className="project-layout">
        <img
          src={image}
          alt={name}
          style={{
            objectFit: "cover",
            maxHeight: "300px",
            margin: "20px 0",
          }}
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Project;

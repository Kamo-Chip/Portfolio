import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="tag">
        <span>Built and designed by Kamogelo Khumalo</span>
      </div>
      <div className="socials">
        <a href="https://github.com/Kamo-Chip" target="_blank" rel="noreferrer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <BsGithub />
            <span
              style={{
                padding: "0 1em 0 .5em",
              }}
            >
              GitHub
            </span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kamogelokhumalo/" target="_blank" rel="noreferrer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <BsLinkedin />
            <span
              style={{
                padding: "0 .5em",
              }}
            >
              LinkedIn
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

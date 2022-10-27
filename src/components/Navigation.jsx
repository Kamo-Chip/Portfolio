import "../styles/Navigation.css";
import { Link } from "react-scroll";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navigation = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      document.querySelector(".nav-socials").classList.add("disappear");
      setShowNavItems(false);
    } else {
      nav.classList.add("nav-on");
      document.querySelector(".nav-socials").classList.remove("disappear");
      document.querySelector(".nav-socials").style.display = "flex";
      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(true);
    }
  };

  useEffect(() => {}, [showNavItems]);

  return (
    <nav className="navigation">
      <span className="logo">Kamo.</span>
      <div className="nav-items-container">
        <div onClick={toggleNav} className="nav-icon-container">
          {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
        </div>
        <ul className="nav-list">
          <li>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              About
            </Link>
          </li>
          <li>
            <a
              href="https://resume.io/r/2wnrTk7E6"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-socials">
          <a href="https://github.com/Kamo-Chip" target="_blank" rel="noreferrer">
            <BsGithub size="1.7rem"/>
          </a>
          <a
            href="https://www.linkedin.com/in/kamogelokhumalo/"
            target="_blank" rel="noreferrer"
          >
            <BsLinkedin size="1.7rem"/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

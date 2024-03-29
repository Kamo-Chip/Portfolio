import "../styles/Navigation.css";
import { Link } from "react-scroll";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import resume from "../documents/resume.pdf";

const Navigation = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      nav.classList.add("nav-off");
      document.querySelector(".nav-socials").classList.add("disappear");
      setShowNavItems(false);
    } else {
      nav.classList.remove("nav-off");
      nav.classList.add("nav-on");
      document.querySelector(".nav-socials").classList.remove("disappear");
      document.querySelector(".nav-socials").style.display = "flex";
      document.querySelector(".nav-icon-container").style.position = "absolute";
      setShowNavItems(true);
    }
  };

  const closeNav = () => {
    if (showNavItems) {
      setShowNavItems(false);
      toggleNav();
    }
  };
  useEffect(() => {}, [showNavItems]);

  return (
    <nav className="navigation">
      <span className="logo">Kamo</span>
      <div className="nav-items-container">
        <div onClick={toggleNav} className="nav-icon-container">
          {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
        </div>
        <ul className="nav-list">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeNav}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              onClick={closeNav}
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
              onClick={closeNav}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-socials">
          <a
            href="https://github.com/Kamo-Chip"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
            onClick={closeNav}
          >
            <BsGithub size="1.7rem" color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/kamogelokhumalo/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
            onClick={closeNav}
          >
            <BsLinkedin size="1.7rem" color="#fff" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

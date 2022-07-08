import React from 'react';
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className='navigation'>
        <ul>
            <li>
              <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
            </li>
            <li><a href="https://resume.io/r/2wnrTk7E6" target="_blank">Resume</a></li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navigation
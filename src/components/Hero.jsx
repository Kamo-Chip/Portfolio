import React from "react";
import { Link } from "react-scroll";
import Arrow from "../images/arrow.png";

const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-text">
                    <span className="text1" style={{
                        fontSize: "2rem",
                    }}>Hi, my name is</span>
                    <span className="text2">Kamogelo Khumalo</span>
                    <span className="text3" style={{
                        fontSize: "2rem"
                    }}>I am a full stack developer and I create things for the Interwebs</span>
                </div>
                <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
                    <button type="text" className="btn">View projects</button>
                </Link>
            </div>
        </>
    );
}

export default Hero;
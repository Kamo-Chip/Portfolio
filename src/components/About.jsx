import React from 'react';
import Me from "../images/Me.jpg";

const About = () => {
  return (
    <section className='about' id="about">
        <div className='details-container'>
            <div className='about-aside'>
                <img src={Me} alt="A headshot of me" style={{
                    height: "150px",
                    alignSelf: "center",
                    border: "solid #000 3px",
                    boxShadow: "10px 10px",
                    borderRadius: "5px"
                }}/>
            </div>
            <div className='about-text'>
                <h1>About</h1>
                <div className='skills-container'>
                    <div>JavaScript</div>
                    <div>React</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>Java</div>
                    <div>Ruby</div>
                    <div>Git</div>
                    <div>Firebase</div>
                    <div>MongoDB</div>
                    <div>SQL</div>
                    <div>Mongoose</div>
                    <div>Node</div>
                    <div>Pug</div>
                    <div>EJS</div>
                    <div>Express</div>
                </div>
                <div className='description'>
                    <p>
                        I love: coding 👨🏿‍💻, working out 🏋🏿‍♂️ and taking walks 🛣️.<br/><br/>I have always been interested
                        in computers. My first obsession was making "art" in MS Paint. I quickly discovered that MS Paint 
                        was built with something called "code" and my love for creating things found itself a new outlet - programming.<br/>
                        In the last few years, I have dedicated myself to becoming a professional developer. This dedication resulted in
                        me starting a community where I taught people the fundamentals of programming. This was extremely fun but I am now looking to grow into more challenging positions. I would love to hear from you!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
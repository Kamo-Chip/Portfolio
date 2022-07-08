import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
        <div>
            <span>Built and designed by Kamogelo Khumalo</span>
        </div>
        <div className='socials'>
            <a href="https://github.com/Kamo-Chip" target="_blank">
              <div>
                <BsGithub/>
                <span style={{
                  padding: "0 .5em"
                }}>GitHub</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/kamogelo-khumalo-142b07222/" target="_blank">
              <div>
                <BsLinkedin/>
                <span style={{
                  padding: "0 .5em"
                }}>LinkedIn</span>
              </div>
            </a>
            <a href="https://twitter.com/kamo_io" target="_blank">
              <div>
                <BsTwitter/>
                <span style={{
                  padding: "0 .5em"
                }}>Twitter</span>
              </div>
            </a>
        </div>
    </footer>
  )
}

export default Footer
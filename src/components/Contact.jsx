import React from 'react';
import Footer from './Footer';
import { BiLinkExternal } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <section className='contact' id="contact">
        <h1>Contact Me</h1>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <p style={{
            paddingRight: ".5em"
          }}>Email:</p>
          <a href="mailto:hellokamo04@gmail.com" target="_blank">hellokamo04@gmail.com<BiLinkExternal/></a>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
import React from 'react';
import Footer from './Footer';
import { BiLinkExternal } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <section className='contact' id="contact">
        <h1>Contact Me</h1>
        <a href="mailto:kamokhumalo04@gmail.com" target="_blank">KamoKhumalo04@gmail.com<BiLinkExternal/></a>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
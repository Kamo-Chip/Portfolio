import React from "react";
import Footer from "./Footer";
import { BiLinkExternal } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1>Contact Me</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: ".8em", display: "flex", alignItems: "center"}}>
            <GrMail />
          </div>
          <a
            href="mailto:hellokamo04@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display:"flex",
              alignItems: "center"
            }}
          >
            hellokamo04@gmail.com
            <BiLinkExternal />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

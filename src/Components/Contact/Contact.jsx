import React, { useContext } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vdbrhl6",
        "template_os2read",
        form.current,
        "p6a5ThWpWjrIMoC8X"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
        <span>Contact Me</span>
        <div className="blur c-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="send" className="button" />
          <span>{done && "Thanks for contacting me"}</span>
        </form>
      </div>
      <div
        className="blur c-blur2"
        style={{ background: "var(--purple)" }}
      ></div>
    </div>
  );
};

export default Contact;

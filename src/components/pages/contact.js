import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { send } from "emailjs-com";

import TitleSlide from "../helpers/titleSlide";

function Contact() {

  const [toSend, setToSend] = useState({
    to_name: 'Ryan Surdick',
    from_name: '',
    from_email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    send(
      'service_7rtx08g',
      'template_9z5w99e',
      toSend,
      'ShHCuamLnQqddM7l2'
    )
  }

  return (
    <div className="contact-page">
      <div className="contact-title">
        <div className="blue-circle" />
        <TitleSlide className="title-slide" title="Contact Me" color={"white"} />
        <div className="contact-wrapper">
          <form onSubmit={onSubmit}>
            <input 
              className="from-name"
              name="from_name"
              placeholder="Your name"
              value={toSend.from_name}
              onChange={handleChange}
            />

            <input
              className="from-email"
              name="from_email"
              placeholder="Your email"
              value={toSend.from_email}
              onChange={handleChange}
            />

            <textarea
              className="message"
              name="message"
              placeholder="message"
              value={toSend.message}
              onChange={handleChange}
            />
            <button className="send-message" type="submit">Send Message</button>
          </form>

          <div className="social-media-links">
            <a className="link" href="https://github.com/JapanCodeman">
              <FontAwesomeIcon icon={"fa-brands fa-github"}/>
              Github
            </a>

            <a className="link" href="https://www.linkedin.com/in/ryan-surdick-072533219/">
              <FontAwesomeIcon icon={"fa-brands fa-linkedin"} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
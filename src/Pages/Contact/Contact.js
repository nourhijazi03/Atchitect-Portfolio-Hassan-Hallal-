import React, { useRef } from "react";
import "./contact.css";
import { DefaultPlayer as Video } from "react-html5video";
import emailjs, { send } from "@emailjs/browser";
import v from "./video/video1.mp4";
import { useState } from "react";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AllOutIcon from '@mui/icons-material/AllOut';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w5cwlcx",
        "template_yk86vbn",
        form.current,
        "qjzowUpWzd-LiQGfq"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("message Sent");
        },
        (error) => {
          console.log(error.text);
          window.alert("An error occured");
        }
      );
  };

  //video

  return (
    <div className="contactContainer">
      <h1 className="contacttitle">Contact Me</h1>
      <div className="maincontact">
        <div className="contactimg">
          <video width="auto" height="100%" autoPlay muted loop className="videodiv">
            <source type="video/mp4" src={v} />
          </video>
          <AllOutIcon className="coloricon"/>
        </div>

        <div className="contactdiv">
        
          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="user-name">Full Name</label>
            <input name="user-name" type="text" required autoComplete="off" />

            <label htmlFor="user-email">Email</label>
            <input name="user-email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea rows="9" name="message" required></textarea>
            <button type="submit" value="send">
              Send Message
            </button>
          </form>
          
        </div>
        
      </div>
      {/* <ColorLensIcon className="coloricon"/> */}
      
    </div>
  );
}

export default Contact;

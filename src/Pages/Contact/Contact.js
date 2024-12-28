import React, { useRef } from "react";
import "./contact.css";
import bgimage from "./6.jpg";

import emailjs, { send } from "@emailjs/browser";
import AllOutIcon from "@mui/icons-material/AllOut";

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
    <div
      className="contactContainer"
      style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
    >
      <h1 className="contacttitle">Contact Me</h1>
      <div className="maincontact">
        <div className="contactimg">
          <div className="contactCard">
            <button class="card">
              <div class="row clearfix">
                <div className="left big"></div>
                <div class="right big">70 977 367</div>
              </div>
              <div class="row">
                <p>
                  <span class="big">H</span>assan{" "}
                  <span class="big">Hallal</span>
                </p>
                <p>
                  <span class="big">I</span>nterior<span class="big"> A</span>
                  rchitect
                </p>
              </div>
              <div class="row">
                <p style={{ position: "absolute", top: "140px" }}>
                  <span class="med">358 E</span>
                  <span class="small">xchange </span>
                  <span class="med">P</span>
                  <span class="small">lace </span>
                  <span class="med">N</span>
                  <span class="small">ew </span>
                  <span class="med">Y</span>
                  <span class="small">ork</span>
                  <span class="med">, N. Y. 10099 F</span>
                  <span class="small">ax </span>
                  <span class="med">212 555 6390 T</span>
                  <span class="small">elex </span>
                  <span class="med">10 4534</span>
                </p>
              </div>
            </button>
          </div>
          <AllOutIcon className="coloricon" />
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

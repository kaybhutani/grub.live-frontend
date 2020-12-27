import React, { useState } from "react";
import twitterIcon from "../../assets/images/twitter.svg";
import instagramIcon from "../../assets/images/instagram.svg";

const Contact = () => {
  const [body, setBody] = useState(null);
  const [subject, setSubject] = useState(null);

  return (
    <div className="container">
      <div className="container">
        <h1>Contact Us!</h1>
        <p>
          Email ID:{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:grubdotlive@gmail.com"
          >
            grubdotlive@gmail.com
          </a>
        </p>
        <p>
          Phone number: <a href="tel:+918802999631">+91 8802999631</a>
        </p>
        <p>
          Social media:
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/grub_live/"
          >
            <img
              className="social-icon"
              src={instagramIcon}
              alt="instagram"
            ></img>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/grub_live"
          >
            <img className="social-icon" src={twitterIcon} alt="twitter"></img>
          </a>
        </p>
        <br></br>
        <h1>Send Feedback</h1>
        <p>
          We would love to hear your thoughts, suggestions, concerns or problems
          with anything so we can improve!
        </p>
        <br></br>
        <div className="shadow-box" style={{ maxWidth: "1024px" }}>
          <p>Title</p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            className="form-input"
            type="text"
            placeholder="Example: Bug: QR code not downloading"
          ></input>
          <br></br>
          <p>Description</p>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            style={{ minHeight: "128px" }}
            className="form-input"
            placeholder="Example: When clicking on Download QR sticker button, no file is downloaded."
          ></textarea>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:grubdotlive@gmail.com?subject=${subject}&body=${body}`}
            className="black-yellow"
            style={{ textDecoration: "none", margin: "0" }}
          >
            Send Feedback
          </a>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Contact;

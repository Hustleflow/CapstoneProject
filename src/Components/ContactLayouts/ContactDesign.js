import React from "react";
import { Link } from "react-router-dom";
import "./ContactDesign.css";

const ContactDesign = () => {
  return (
    <div className="contact-cage">
        <h1 className="contactintro">CONTACT US</h1>
        <div className="input-container">
            <input type="text" alt="name" placeholder="Name" />
            <input type="text" alt="Email" placeholder="Email" />
            <input type="text" alt="message" placeholder="Type your message here..." />

        </div>

 


      <Link className="submit-button"to="/">Submit</Link>
      </div>

  );
};

export default ContactDesign;

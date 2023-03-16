import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-inner">
        <h1>Contact Me</h1>
        <form className="contact-form">
          <div>
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label>Message</label>
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Contact.css";
import { db } from "../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msgcontent, setMsgcontent] = useState("");

  const userCollectionRef = collection(db, "contactData");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission and page refresh

    if (!name || !email || !msgcontent) {
      alert("Please fill in all the details.");
      return;
    }

    addDoc(userCollectionRef, {
      name: name,
      email: email,
      msgcontent: msgcontent
    })
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMsgcontent("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="contact" id="contacts">
      <div className="contact-inner">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              id="msgcontent"
              placeholder="Message"
              value={msgcontent}
              onChange={(event) => setMsgcontent(event.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

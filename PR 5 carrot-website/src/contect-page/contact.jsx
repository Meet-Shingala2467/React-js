// Contact.js
import React from "react";
import "./contact.css"; // Importing contact.css

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Contact Number:
          <input type="tel" name="contact" />
        </label>
        <label>
          email:
        <input type="text"/>
        </label>
        <label>
          Review (max 250 words):
          <textarea name="review" maxLength="250" />
        </label>
        <input type="hidden" name="randomId" value={Math.random().toString(36).substr(2, 9)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
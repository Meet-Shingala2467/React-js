// Contact.js
import React, { useState } from "react";
import "./contact.css"; // Importing contact.css
import { app } from "../firebase"; // Import Firebase config
import { getDatabase, ref, set } from "firebase/database";

import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    review: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const id = Math.random().toString(36).substr(2, 9); // Generate unique ID

    // Save data to Firebase
    set(ref(db, `users/${id}`), {
      ...formData,
    })
      .then(() => {
        alert("Record added successfully!");
        setFormData({ name: "", phone: "", email: "", review: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Error adding record: ", error);
        alert("Failed to add record.");
      });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
         Feedback:
          <textarea
            name="review"
            maxLength="250"
            value={formData.review}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import "./contact.css"; // For additional custom styling
import { app } from "../firebase"; // Firebase config
import { getDatabase, ref, set } from "firebase/database";
import { Container, Button, Modal, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; // For animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    review: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState({ variant: "", message: "" });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const id = Math.random().toString(36).substr(2, 9);

    set(ref(db, `users/${id}`), {
      ...formData,
    })
      .then(() => {
        setAlert({ variant: "success", message: "Record added successfully!" });
        setFormData({ name: "", phone: "", email: "", review: "" });
      })
      .catch((error) => {
        console.error("Error adding record: ", error);
        setAlert({ variant: "danger", message: "Failed to add record." });
      })
      .finally(() => {
        setShowModal(false); // Close the modal
      });
  };

  return (
    <Container className="contact-page animate__animated animate__fadeIn mt-5 text-center">
      <h1 className="mb-4">Contact Us</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Open Contact Form
      </Button>

      {/* Modal Form */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alert.message && (
            <Alert variant={alert.variant} className="mb-3">
              {alert.message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formReview" className="mb-3">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                name="review"
                rows={4}
                maxLength="250"
                value={formData.review}
                onChange={handleChange}
                placeholder="Share your feedback (max 250 characters)"
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Contact;

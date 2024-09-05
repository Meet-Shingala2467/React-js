const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries or feedback.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Contact;

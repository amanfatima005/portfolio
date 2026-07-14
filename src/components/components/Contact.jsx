import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-text">
        Feel free to reach out — always open to connecting, collaborating, or chatting about projects.
      </p>

      <div className="contact-links">
        <a href="mailto:aman.fatimah005@gmail.com" className="contact-link">
          📧 saeedsaim427@gmail.com
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="contact-link">
          💼 https://www.linkedin.com/in/aman-fatima-b024b331a
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="contact-link">
          🐙 https://github.com/amanfatima005
        </a>
      </div>
    </section>
  );
}

export default Contact;

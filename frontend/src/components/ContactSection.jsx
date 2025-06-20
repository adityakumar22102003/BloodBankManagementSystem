import React from 'react';
import '../styles/contact.css';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form" aria-label="Contact form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div className="contact-info">
          <p><strong>Email:</strong> support@bloodbank.com</p>
          <p><strong>Phone:</strong> +91 12345 67890</p>
          <p><strong>Address:</strong> 123, Health St, City, India</p>
        </div>
      </div>
    </section>
  );
} 
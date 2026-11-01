import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <main className="contact">
      <header className="contact-header">
        <h1>Contact Me</h1>
        <p>Have a question? Send a message using the form below.</p>
      </header>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" placeholder="Your name" />
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={5} placeholder="Your message" />
        </div>

        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </main>
  );
};

export default Contact;
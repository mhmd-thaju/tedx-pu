import React from "react";
import "./Contact.css";
import banner from "../assets/contacts_first.png"; // Top image from assets

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Top banner image */}
      <div className="contact-banner">
        <img src={banner} alt="Contact Banner" />
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left: Map and Info */}
        <div className="contact-left">
          <div className="contact-info">
            <h1>
              <span>Contact</span> us
            </h1>
            <p>Fill out our form, and we’ll try to get back to you within 2 hours.</p>
          </div>
          <div className="map-container">
            <p>Farook College, Calicut</p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.014663621716!2d75.8557521758793!3d11.22174895048662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b8579b7a50f%3A0x5a59df2ec23e9c84!2sFarook%20College!5e0!3m2!1sen!2sin!4v1715765108965!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-right">
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>E-Mail</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Message</label>
            <textarea placeholder="Enter your message" required></textarea>

            <p className="whatsapp">Join us on WhatsApp</p>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Footer contact */}
      <div className="contact-footer">
        contacttedxfarook@gmail.com
      </div>
    </div>
  );
};

export default Contact;

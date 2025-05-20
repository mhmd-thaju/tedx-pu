import React from "react";
import "./Contact.css";
import banner from "../assets/contacts_first.png";
import tdtxt from "../assets/tedx_text.jpg";
import auro from "../assets/Auroville.png" // Top image from assets

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Top banner image */}
      <div className="contact-banner">
        <div className="banner-image">
          <img src={tdtxt} alt="Contact Banner" />
          <img src={auro} alt="Contact Banner" />
        </div>
        

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
            <p>Pondicherry University, Kalapet</p>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.185192982051!2d79.8542712!3d12.0182619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536176a1e57959%3A0xf9c2bcf93bd35eba!2sPondicherry%20University!5e0!3m2!1sen!2sin!4v1716140341714!5m2!1sen!2sin"
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
    
    </div>
  );
};

export default Contact;

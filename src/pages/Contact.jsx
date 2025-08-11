import React from "react";
import "./Contact.css";
//import banner from "../assets/contacts_first.png";
//import tdtxt from "../assets/tedx_text.jpg";
import txt1 from "../assets/thinkers1.png";
//import auro from "../assets/Auroville.png";
import matrimandir from "../assets/Matrimandir1.png"; // Top image from assets

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c82c4f31-24c6-47bd-b2ca-743ff002c1bb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Submitted successfully" );
    }
  };


  return (
    <div className="contact-page">
      {/* Top banner image */}
      <div className="contact-banner">
        <div className="banner-image">
          <img src={txt1} alt="Contact Banner" />
          <img src={matrimandir} alt="Contact Banner" />
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
          <form className="contact-form" onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text"  name="name" placeholder="Enter your name" required />

            <label>E-Mail</label>
            <input type="email" name="mail" placeholder="Enter your email" required />

            <label>Message</label>
            <textarea placeholder="Enter your message" name="message" required></textarea>

            <p className="whatsapp">Join us on WhatsApp</p>
            <button type="submit">Send</button>
          </form>
          <div className="mail-id">
            <p>tedxpondicherryuniversity@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer contact */}
    
    </div>
  );
};

export default Contact;

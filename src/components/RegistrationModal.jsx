import React from 'react';
import './RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div key={isOpen} className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Participant Registration Form</h2>
        <p>Please fill the form below keenly and let us know if you give go ahead for this participation</p>
        <hr />
        <form className="form-content">
          <label>Name:</label>
          <input type="text" placeholder="Full Name" required />

          <label>Phone:</label>
          <div className="phone-group">
            <select className="country-code" defaultValue="+91">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input className="phone-number" type="tel" placeholder="Phone Number" required />
          </div>

          <label>Email:</label>
          <input type="email" placeholder="Email" required />

          <label>Category:</label>
          <select required>
            <option value="">Select an option</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="guest">Guest</option>
          </select>

          <button type="submit" className="submit-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;

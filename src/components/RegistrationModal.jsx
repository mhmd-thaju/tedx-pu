import { useState } from "react";
import "./RegistrationModal.css";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: ""
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("form"); // form → category → qr
  const [selectedType, setSelectedType] = useState("");

  if (!isOpen) return null;

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    const phoneRegex = /^(\+?\d{1,3})?\d{10}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone must be exactly 10 digits (with optional country code)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // ✅ directly go to category selection step
      setStep("category");
    }
  };

  const handleCategoryClick = (type) => {
    setSelectedType(type);
    setStep("qr");
  };

  const handleBack = () => {
    if (step === "qr") setStep("category");
    else if (step === "category") setStep("form");
    else onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box animate-modal">
        <button className="modal-close" onClick={handleBack}>×</button>

        {step === "form" && (
          <>
            <h2>Participant Registration Form</h2>
            <p>
              Please fill the form below keenly and let us know if you give
              go ahead for this participation
            </p>
            <hr />
            <form className="form-content" onSubmit={handleSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-text">{errors.name}</span>}

              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}

              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}

              <button type="submit" className="submit-btn glow">
                Next
              </button>
            </form>
          </>
        )}

        {step === "category" && (
          <>
            <h2>Select Your Category</h2>
            <p className="disclaimer">* Students should carry valid ID proof</p>
            <hr />
            <div className="category-grid">
              <div
                className="category-box"
                onClick={() => handleCategoryClick("student")}
              >
                🎓 Student
              </div>
              <div
                className="category-box"
                onClick={() => handleCategoryClick("general")}
              >
                👤 General
              </div>
            </div>
          </>
        )}

        {step === "qr" && (
          <>
            <h2>{selectedType === "student" ? "Student QR Code" : "General QR Code"}</h2>
            <p className="disclaimer">Show this QR code at the event entry.</p>
            <hr />
            <div className="qr-container">
              {selectedType === "student" ? (
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=StudentTicket"
                  alt="Student QR"
                />
              ) : (
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GeneralTicket"
                  alt="General QR"
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;

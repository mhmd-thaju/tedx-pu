import { useState } from "react";
import './RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const phoneRegex = /^(\+?\d{1,3})?\d{10}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone must be exactly 10 digits (with optional country code)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
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
      setIsSubmitting(true);

      try {
        await fetch("https://script.google.com/macros/s/AKfycbwc36TNIsFPuQuXQeW2cAV885Uf9hkIah147MC19aq1Dr8BFvaRnhJ3lelRsAO_K8Vf/exec", {
          method: "POST",
          mode: "no-cors", // ✅ prevents CORS issue
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        // Show success animation
        setIsSuccess(true);

        // Reset form after success
        setFormData({
          name: "",
          phone: "",
          email: "",
          category: ""
        });
        setErrors({});

        // Close after 2s delay
        setTimeout(() => {
          setIsSuccess(false);
          setIsSubmitting(false);
          onClose();
        }, 2000);

      } catch (error) {
        console.error("Error submitting form:", error);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box animate-modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Participant Registration Form</h2>
        <p>
          Please fill the form below keenly and let us know if you give
          go ahead for this participation
        </p>
        <hr />

        {isSuccess ? (
          <div className="success-animation">
            <div className="checkmark">✔</div>
            <p>Done!</p>
          </div>
        ) : (
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
              className="phone-number"
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

            <label>Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
            {errors.category && <span className="error-text">{errors.category}</span>}

            <button type="submit" className="submit-btn glow" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Next"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;

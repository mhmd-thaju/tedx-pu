import { useState } from "react";
import "./RegistrationModal.css";
import { FaUserGraduate, FaUsers } from "react-icons/fa"; 
import studentQR from "../assets/Auroville.png";
import generalQR from "../assets/Auroville.png";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", category: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    const phoneRegex = /^(\+?\d{1,3})?\d{10}$/;
    if (!phoneRegex.test(formData.phone.trim())) newErrors.phone = "Phone must be exactly 10 digits";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) newErrors.email = "Enter a valid email address";
    if (!formData.category) newErrors.category = "Please select a category";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbwc36TNIsFPuQuXQeW2cAV885Uf9hkIah147MC19aq1Dr8BFvaRnhJ3lelRsAO_K8Vf/exec",
          { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) }
        );
        setShowSecondModal(true);
        setIsSubmitting(false);
        setFormData({ name: "", phone: "", email: "", category: "" });
        setErrors({});
      } catch (err) {
        console.error(err);
        setIsSubmitting(false);
      }
    }
  };

  const handleCategoryClick = (category) => setSelectedCategory(category);
  const handleCloseAll = () => { setShowSecondModal(false); setSelectedCategory(""); onClose(); };

  const amount = selectedCategory === "Student" ? 299 : 399;
  const upiUrl = "upi://pay?pa=tedxpu@indianbk&pn=TEDxPU&am=" + amount + "&cu=INR&tn=Ticket";

  const qrImage = selectedCategory === "Student" ? studentQR : generalQR;

  return (
    <>
      {/* First Modal */}
      {!showSecondModal && (
        <div className="modal-overlay">
          <div className="modal-box animate-modal">
            <button className="modal-close" onClick={onClose}>×</button>
            <h2>Participant Registration Form</h2>
            <form className="form-content" onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error-text">{errors.name}</span>}
              <label>Phone:</label>
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
              <label>Email:</label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error-text">{errors.email}</span>}
              <label>Category:</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
              {errors.category && <span className="error-text">{errors.category}</span>}
              <button type="submit" className="submit-btn glow">{isSubmitting ? "Submitting..." : "Next"}</button>
            </form>
          </div>
        </div>
      )}

      {/* Second Modal */}
      {showSecondModal && !selectedCategory && (
        <div className="modal-overlay">
          <div className="modal-box animate-modal">
            <button className="modal-close" onClick={handleCloseAll}>×</button>
            <h2>Choose Your Category</h2>
            <div className="orange-box-container">
              <div className="orange-box" onClick={() => handleCategoryClick("Student")}><FaUserGraduate size={40} /><span>Student</span></div>
              <div className="orange-box" onClick={() => handleCategoryClick("General")}><FaUsers size={40} /><span>General</span></div>
            </div>
            <p className="disclaimer">* Students should carry valid ID proof.</p>
          </div>
        </div>
      )}

      {/* Third Modal */}
      {selectedCategory && (
        <div className="modal-overlay">
          <div className="modal-box animate-modal">
            <button className="modal-close" onClick={handleCloseAll}>×</button>
            <h2>{selectedCategory} Payment</h2>
            <p>Pay ₹{amount} via UPI</p>
            <div className="qr-container">
              <img src={qrImage} alt={`${selectedCategory} QR`} style={{ width: "200px", height: "200px" }} />
            </div>
            <a href={upiUrl} target="_blank" className="submit-btn glow">Pay via UPI App</a>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;

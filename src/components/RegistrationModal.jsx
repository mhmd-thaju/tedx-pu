import { useState } from "react";
import "./RegistrationModal.css";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import studentQR from "../assets/upi_qr_299.png";
import generalQR from "../assets/upi_qr_399.png";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", category: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email.trim())) newErrors.email = "Enter a valid email address";

    if (!formData.category) newErrors.category = "Please select a category";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSecondModal(true);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseAll = () => {
    setShowSecondModal(false);
    setSelectedCategory("");
    onClose();
  };

  const amount = selectedCategory === "Student" ? 399 : 499;
  const upiUrl = `upi://pay?pa=tedxpu@indianbk&pn=TEDxPU&am=${amount}&cu=INR&tn=Ticket`;
  const qrImage = selectedCategory === "Student" ? studentQR : generalQR;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFinalSubmit = async () => {
    if (!image) {
      alert("Please upload an image before submitting.");
      return;
    }

    const cloudForm = new FormData();
    cloudForm.append("file", image);
    cloudForm.append("upload_preset", "TEDx_registration"); // 🔁 Replace with your Cloudinary preset

    setLoading(true);

    try {
      // 1. Upload to Cloudinary
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dovasvkjm/image/upload", // 🔁 Replace with your Cloudinary cloud name
        {
          method: "POST",
          body: cloudForm,
        }
      );

      const data = await res.json();

      if (!data.secure_url) throw new Error("Image upload failed.");

      const imlink = data.secure_url;

      // 2. Send all data + image link to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbwQ11GECwJ7y0Tva7YNbd-I5AqxAIcJrt6rrJ3l9FshsBElG8cwOHRGeRKuQIQKimvr/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            ticketType: selectedCategory,
            imageUrl: imlink,
          }),
        }
      );

      alert("🎉 Welcome aboard!, We will be sending your ticket shortly, Kindly please check your Mail.");
      handleCloseAll();

    } catch (err) {
      console.error("Submission failed:", err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            <h2>Choose Your Ticket Type</h2>
            <div className="orange-box-container">
              <div className="orange-box" onClick={() => handleCategoryClick("Student")}>
                <FaUserGraduate size={40} />
                <span>Student</span>
                <br />
                <sub>Applicable only for students</sub>
              </div>
              <div className="orange-box" onClick={() => handleCategoryClick("General")}>
                <FaUsers size={40} />
                <span>General</span>
              </div>
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
            <a href={upiUrl} target="_blank" rel="noreferrer" className="submit-btn glow">
              Pay via UPI App
            </a>
            <hr />
            <div>
              <h3>Upload Payment Screenshot</h3>
              <input type="file" onChange={handleImageChange} accept="image/*" className="imgb"/>
              <button onClick={handleFinalSubmit} className="imgb" disabled={loading || !image}>
                {loading ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
            <hr />
            <div>
              <p>For queries : info.tedxpu@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;

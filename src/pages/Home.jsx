import { useState, useEffect } from 'react';
import DateCard from '../components/DateCard';
import Tabs from "../components/Tabs";
import "./Home.css";
import Contact from './Contact';
import RegistrationModal from '../components/RegistrationModal';

function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [readyToShowContent, setReadyToShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('hasShownAnimation');

    if (!hasShown) {
      setShowAnimation(true);
      sessionStorage.setItem('hasShownAnimation', 'true');

      const timer = setTimeout(() => {
        setShowAnimation(false);
        setReadyToShowContent(true);
      }, 5000); // 5s animation

      return () => clearTimeout(timer);
    } else {
      setReadyToShowContent(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // prevent multiple submits

    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbysKY5fz-wL4PE12m9NNLbm0CCpaUe2vossB_HEgE6kLlcaaB2UpCn9NY-APnVFEdE_/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
        mode: "no-cors"  // optional, for CORS issues
      });

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", category: "" });

      // Close modal after short delay
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
      }, 1500);

    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showAnimation && (
        <div className="landing-animation">
          <h1 className="landing-text">TEDxPU</h1>
        </div>
      )}

      {readyToShowContent && (
        <>
          {/* Full-page Booking Section */}
          <div className="booking-sec full-page">
            <h1 className="booking-head">
              Book Your <span className="highlight-red">Tickets</span> Now!
            </h1>
            <p className="booking-desc">
              Don’t miss out on a full day of <i>ideas worth sharing</i> and refreshing entertainment.
              <br />
              Reserve your slot before seats run out!
            </p>
            <button className="book-button" onClick={() => setShowModal(true)}>Book Now</button>
          </div>

          {/* Registration Modal */}
          <RegistrationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleSubmit}
            formData={formData}
            onChange={handleChange}
            loading={loading}
            submitted={submitted}
          />

          {/* Event Info & Tabs Section */}
          <div className='main-con'>
            <div className="date-sec">
              <div className="date-text">
                <span className='text'>TEDxPondicherryUniversity </span>
              </div>
              <div className="datec-main" style={{ display: 'flex', gap: '20px' }}>
                <DateCard day={13} month="September" />
              </div>
            </div>
            <div className='Tabs'><Tabs /></div>
            <div className='contact'>
              <Contact />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;

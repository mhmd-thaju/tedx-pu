import { useState, useEffect } from 'react';
import DateCard from '../components/DateCard';
import Tabs from "../components/Tabs";
import "./Home.css";
import Contact from './Contact';

function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [readyToShowContent, setReadyToShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

          {/* Modal */}
          {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Participant Registration Form</h2>
                <p>Please fill the form below keenly and let us know if you give go ahead for this participation</p>
                <hr />
                <form>
                  <label>Name:</label>
                  <input type="text" placeholder="Full Name" />

                  <label>Phone:</label>
                  <div className="phone-input">
                    <select>
                      <option>+91</option>
                    </select>
                    <input type="text" placeholder="Phone Number" />
                  </div>

                  <label>Email:</label>
                  <input type="email" placeholder="Email" />

                  <label>Category:</label>
                  <select>
                    <option>Select an option</option>
                    <option>Student</option>
                    <option>Guest</option>
                    <option>Speaker</option>
                  </select>

                  <button type="submit" className="modal-button">Next</button>
                </form>
              </div>
            </div>
          )}

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
            <Contact/>
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;

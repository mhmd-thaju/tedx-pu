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

          {/* Registration Modal */}
          <RegistrationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
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

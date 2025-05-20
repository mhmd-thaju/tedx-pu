import React, { useState, useEffect } from 'react';
import DateCard from '../components/DateCard';
import Tabs from "../components/Tabs";
import "./Home.css";

function Home() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('hasShownAnimation');

    if (!hasShown) {
      setShowAnimation(true);
      sessionStorage.setItem('hasShownAnimation', 'true');

      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 5000); // animation lasts 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showAnimation && (
        <div className="landing-animation">
          <h1 className="landing-text">TEDxPU</h1>
        </div>
      )}

      {!showAnimation && (
        <div className='main-con' style={{ paddingTop: '90px' }}>
          <div className="date-sec">
            <div className="date-text">
              <span className='text'>TEDx Pondicherry University <b>Season 1</b></span>
            </div>
            <div className="datec-main" style={{ display: 'flex', gap: '20px' }}>
              <DateCard date="September 23,2025 " />
            </div>
          </div>
          <div><Tabs /></div>
        </div>
      )}
    </>
  );
}

export default Home;

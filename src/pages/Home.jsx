import React, { useState, useEffect } from 'react';
import DateCard from '../components/DateCard';
import Tabs from "../components/Tabs";
import "./Home.css";

function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [readyToShowContent, setReadyToShowContent] = useState(false);

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
      // Animation already shown: show content immediately
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
        <div className='main-con' style={{ paddingTop: '90px' }}>
          <div className="date-sec">
            <div className="date-text">
              <span className='text'>TEDx Pondicherry University <b>Season 1</b></span>
            </div>
            <div className="datec-main" style={{ display: 'flex', gap: '20px' }}>
              <DateCard date="September 23,2025 " />
            </div>
          </div>
          <div className='Tabs'><Tabs /></div>
        </div>
      )}
    </>
  );
}

export default Home;

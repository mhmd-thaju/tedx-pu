import React, { useEffect, useRef, useState } from 'react';
import './DateCard.css';

const DateCard = ({ day, month }) => {
  const [splitDay, setSplitDay] = useState({
    tens: Math.floor(day / 10),
    units: day % 10
  });

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setSplitDay({
      tens: Math.floor(day / 10),
      units: day % 10
    });
  }, [day]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation is triggered once
        }
      },
      {
        threshold: 0.4, // 40% of component must be visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const renderSheet = (digit) => (
    <div className="sheet" data-target={digit}>
      <div className="up"><span>{digit}</span></div>
      <div className="down"><span>{digit}</span></div>
      {isVisible && (
        <>
          <div className="helper helper-up animate-up"><span>{digit}</span></div>
          <div className="helper helper-down animate-down"><span>{digit}</span></div>
        </>
      )}
    </div>
  );

  return (
    <div className="outer" ref={containerRef}>
      <div className="calendar">
        <div className="counter clearfix">
          {renderSheet(splitDay.tens)}
          {renderSheet(splitDay.units)}
        </div>
        <div className="month">{month}</div>
      </div>
    </div>
  );
};

export default DateCard;

import React from 'react';
import './DateCard.css';

const DateCard = ({ date }) => {
  return (
    <div className="date-card-2">
      <div className="date-top">Event Date</div>
      <div className="date-bottom">{date}</div>
    </div>
  );
};

export default DateCard;

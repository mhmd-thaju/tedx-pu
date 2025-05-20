import React, { useState } from "react";
import "./Speakers.css";
import speakerImage from "../assets/speaker1.png";

const speakersData = [
  { name: "B P Acharya", image: speakerImage, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at earum dignissimos reiciendis hic distinctio modi iste temporibus illum amet ex minus, repudiandae quis possimus dolorem repellat labore quisquam voluptatem?", youtube: "https://youtube.com" },
  { name: "Speaker 2", image: speakerImage, description: "Description for Speaker 2...", youtube: "https://youtube.com" },
  { name: "Speaker 3", image: speakerImage, description: "Description for Speaker 3...", youtube: "https://youtube.com" },
  { name: "Speaker 4", image: speakerImage, description: "Description for Speaker 4...", youtube: "https://youtube.com" },
  { name: "Speaker 5", image: speakerImage, description: "Description for Speaker 5...", youtube: "https://youtube.com" },
  { name: "Speaker 6", image: speakerImage, description: "Description for Speaker 6...", youtube: "https://youtube.com" },
  { name: "Speaker 7", image: speakerImage, description: "Description for Speaker 7...", youtube: "https://youtube.com" },
  { name: "Speaker 8", image: speakerImage, description: "Description for Speaker 8...", youtube: "https://youtube.com" },
];

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <div className="speakers-container">
      <div className="speakers-header">
        <h1 className="speakers-title">SPEAKERS</h1>
      </div>

      <div className="container mt-5">
        <div className="row">
          {speakersData.map((speaker, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
            >
              <div className="speaker-card" onClick={() => setSelectedSpeaker(speaker)}>
                <img src={speaker.image} alt={speaker.name} className="speaker-img" />
                <div className="speaker-overlay">View Details</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSpeaker && (
        <div className="popup" onClick={() => setSelectedSpeaker(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedSpeaker(null)}>&times;</button>
            <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="popup-img" />
            <div className="popup-name">{selectedSpeaker.name}</div>
            <div className="popup-desc">{selectedSpeaker.description}</div>
            <a href={selectedSpeaker.youtube} className="youtube-link" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;

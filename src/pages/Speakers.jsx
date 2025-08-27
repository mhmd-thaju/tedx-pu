import React, { useState } from "react";
import "./Speakers.css";
import speakerImage from "../assets/speakers/Artist Anuradha Thakur 1.png";
import speakerImage2 from "../assets/speakers/arjun.png";
import speakerImage3 from "../assets/speakers/karthikeyan.png";
import speakerImage4 from "../assets/speakers/Mona.png";
import speakerImage5 from "../assets/speakers/Isha Singh.png";
import speakerImage6 from "../assets/speakers/Kaushik.png";

const speakersData = [
  { 
    name: "Anuradha Thakur", 
    profession: "Artist | Chronicler of Tribal Light & Earth", 
    image: speakerImage, 
    description: "Through pigment and form, Anuradha Thakur brings alive the spirit of India’s tribal communities. Her black lines and earthen hues radiate simplicity and quiet dignity, carrying stories from village roots to the Prime Minister’s Office and the United Nations. Named among India’s Top 100 Women Achievers, her art bridges timeless culture with the present."
  },

  { name: "Arjun Majumdar", profession: "Founder & CEO, Indiahikes | Trekking Visionary | Sustainability Advocate", image: speakerImage2, description: "A trekker at heart, Arjun Majumdar turned his love for the mountains into Indiahikes, a movement that redefined trekking in India. For him, the trail has never been just about summits, but about treading lightly and discovering ourselves along the way. Under his vision, Indiahikes has become more than an organisation. It is a reminder that the journey shapes us as much as the destination." },

  { name: "G. Karthikeyan", profession: "Psychologist | Founder of Sristi Village | Weaver of Inclusive Landscapes", image: speakerImage3, description: "A psychologist at core, G. Karthikeyan transformed his childhood in an orphanage into a vision of belonging, a place where everyone, regardless of ability, could grow and thrive. He founded Sristi Village in rural Tamil Nadu as an inclusive, self-sustaining community where farming, life-skills and care come together to stand not just for healing, but for dignity, independence, and human potential." },

  { name: "Mona Doctor-Pingel", profession: "Architect | Designer of Spaces, Dreamer of Harmony", image: speakerImage4, description: "Blending tradition with modern vision, Mona Doctor-Pingel shapes spaces that speak of balance, sustainability, and soul. Her work is not just about buildings but about nurturing a dialogue between people, nature, and design." },

  { name: "Isha Singh", profession: "Superintendent of Police, East Zone, Puducherry | IPS Officer & Former Lawyer | Serving justice in action", image: speakerImage5, description: "From the courtrooms of Bombay to the streets of Puducherry, Isha Singh carries justice like a compass. A law graduate who once fought for human rights with words, she now serves in uniform, shaping order through action. Rooted in a family tradition of public service, she embodies resilience and purpose, proof that justice can move from ink on paper to the very pulse of a city." },

  { name: "Dr. Kaushik Sridhar", profession: "Award-winning Sustainability Leader | Author | TEDx Speaker", image: speakerImage6, description: "A former tennis player turned global voice in boardrooms, Dr. Kaushik Sridhar brings over two decades of experience in shaping impact. Today, as Founder of Orka Advisory, he helps leaders weave sustainability into strategy, guiding businesses toward futures where society and the environment thrive alongside growth." }
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
              className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
            >
              <div className="speaker-card equal-height" onClick={() => setSelectedSpeaker(speaker)}>
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
            <div className="popup-profession">{selectedSpeaker.profession}</div>
            <div className="popup-desc">{selectedSpeaker.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;

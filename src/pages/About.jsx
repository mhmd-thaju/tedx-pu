import React from 'react';
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* About TED */}
        <section className="about-section about-ted">
          <h2 className="section-title">About TED</h2>
          <p className="section-description">
            TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks.
            TED stands for technology, entertainment, and design. TED's main aim is to inform and educate global
            audiences in an accessible way. Through TED, many thinkers, creators, designers, artists, and other
            experts get to showcase their talents and <strong>"ideas worth spreading"</strong> to the world.
            TED is viewed by more than 3 billion enthusiasts annually, making a lasting impact.
          </p>
        </section>

        {/* About TEDx */}
        <section className="about-section about-tedx">
          <h2 className="section-title">About TEDx</h2>
          <p className="section-description">
            TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover
            <strong> “ideas worth spreading.”</strong> TEDx brings TED to local communities through independently organized events.
            It gives students and communities a platform to explore, share, and connect ideas beyond the classroom.
          </p>
        </section>

        {/* TEDx Pondicherry University */}
        <section className="about-section about-tedx-pu">
          <h2 className="section-title">TEDx Pondicherry University</h2>
          <p className="section-description">
            TEDxPondicherry University is more than an event. It is a stage for bold thinkers, creators, and change-makers to share ideas that have the power to shape the future. Curated by the students of Pondicherry University, our platform connects global vision with local voice, inspiring our community to think bigger, act bolder, and reimagine what is possible.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;

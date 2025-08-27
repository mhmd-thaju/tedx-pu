import React from "react";
import img1 from "../assets/Sponsors/Eaton.png";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="outer">
      <h1 className="sp-title">SPONSORS</h1>
      <hr />

      <div className="title-sponsor centered-layout">
        <h2 className="titlesponsor">Title Sponsor</h2>
        <img src={img1} alt="Eaton Logo" className="sponsor-logo" />

        <div className="sponsor-description">
          <h3 className="highlighted">Meet Our Title Sponsor: Eaton</h3>
          <p>
            The first TEDxPondicherry University carries with it a promise of fresh ideas, bold conversations, and new possibilities. Standing behind that promise is <strong>Eaton</strong>, our Title Sponsor, whose vision and commitment make this historic beginning possible.
          </p>
          <p>
            Eaton is a global leader in intelligent power management. They are transforming the way the world thinks about energy: not only as something we consume, but as something we must manage wisely, protect carefully, and use to build a future that lasts.
          </p>
          <p>
            Their presence spans industries far and wide — mobility, infrastructure, digital systems, manufacturing. In each of these spaces, Eaton brings efficiency, resilience, and innovation. Their purpose is both clear and compelling: to improve the quality of life while safeguarding the planet for generations to come.
          </p>
          <p>
            By partnering with TEDxPondicherry University, Eaton is doing more than placing their name on an event. They are fuelling imagination. They are enabling voices to rise. They are giving ideas the power to spark change.
          </p>
          <p>
            This is leadership in action, and it is the kind of alignment that makes the future possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

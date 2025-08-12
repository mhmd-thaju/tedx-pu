import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const nextTab = () => {
    setToggleState((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const prevTab = () => {
    setToggleState((prev) => (prev === 1 ? 3 : prev - 1));
  };

  return (
    <div className="outer">
      <div className="tabbox">
        {/* Heading Row */}
        <div className="tabcontainer">
          <button className="slider-btn left" onClick={prevTab}>
            ◀
          </button>

          <div className="tab-heading">
            {toggleState === 1 && <span>TED</span>}
            {toggleState === 2 && <span>TEDx</span>}
            {toggleState === 3 && <span>TEDxPondicherry University</span>}
          </div>

          <button className="slider-btn right" onClick={nextTab}>
            ▶
          </button>
        </div>

        {/* Tab content inside same box */}
        <div className="tabcontent">
          {toggleState === 1 && (
            <div className="active-content">
              <p>
                TED is a nonprofit devoted to spreading ideas, usually in the
                form of short, powerful talks. TED stands for technology,
                entertainment, and design. TED's main aim is to inform and
                educate global audiences in an accessible way. Through TED,
                many thinkers, creators, designers, artists, and other experts
                get to showcase their talents and{" "}
                <strong>"ideas worth spreading"</strong> to the world. TED is
                viewed by more than 3 billion enthusiasts annually, making a
                lasting impact.
              </p>
            </div>
          )}

          {toggleState === 2 && (
            <div className="active-content">
              <p>
                TEDx is a grassroots initiative, created in the spirit of TED’s
                overall mission to research and discover{" "}
                <strong>“ideas worth spreading.”</strong> TEDx brings TED to
                local communities through independently organized events. It
                gives students and communities a platform to explore, share,
                and connect ideas beyond the classroom.
              </p>
            </div>
          )}

          {toggleState === 3 && (
            <div className="active-content">
              <p>
                TEDxPondicherry University is an independently organized TEDx
                event, licensed by TED, dedicated to sharing ideas that inspire
                change, spark conversation, and celebrate innovation. Rooted in
                the rich French–Tamil heritage of Pondicherry, our event brings
                together thinkers, creators, visionaries, and changemakers from
                diverse fields to share their unique journeys and transformative
                ideas with a curated audience.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Outside content */}
      <div className="wtedevent">
        <h1>Why should you attend a TED event?</h1>
        <p className="no-bold">
          Attending a TED event will be on everyone's bucket list and with TEDx,
          you get a TED-like experience. If you are keen on listening to
          mind-blowing ideas by talented speakers, TEDx is your way to go!. The
          “ideas worth spreading” in TEDx events gives you a fresh set of
          perspective. TEDx is a unique gathering of like-minded people that can
          unleash ideas and inspiration for tomorrow.
        </p>
      </div>
    </div>
  );
}

export default Tabs;

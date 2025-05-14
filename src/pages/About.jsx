import React from 'react';

function About() {
  return (
    <div
      className="d-flex justify-content-center align-items-start px-3 py-5"
      style={{
        background: 'linear-gradient(to right, #000000, #1c1c1c)',
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <div className="w-100" style={{ maxWidth: '960px' }}>
        {/* About TED */}
        <section className="mb-5 p-4 rounded-4 shadow-lg" style={{ backgroundColor: '#111' }}>
          <h2 className="fw-bold mb-3" style={{ color: '#FF2B06', fontSize: '2rem' }}>
            About TED
          </h2>
          <p className="fs-5" style={{ lineHeight: '1.8' }}>
            TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks.
            TED stands for technology, entertainment, and design. TED's main aim is to inform and educate global
            audiences in an accessible way. Through TED, many thinkers, creators, designers, artists, and other
            experts get to showcase their talents and <strong>"ideas worth spreading"</strong> to the world.
            TED is viewed by more than 3 billion enthusiasts annually, making a lasting impact.
          </p>
        </section>

        {/* About TEDx */}
        <section className="mb-5 p-4 rounded-4 shadow-lg" style={{ backgroundColor: '#1a1a1a' }}>
          <h2 className="fw-bold mb-3" style={{ color: '#FF2B06', fontSize: '2rem' }}>
            About TEDx
          </h2>
          <p className="fs-5" style={{ lineHeight: '1.8' }}>
            TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover
            <strong> “ideas worth spreading.”</strong> TEDx brings TED to local communities through independently organized events.
            It gives students and communities a platform to explore, share, and connect ideas beyond the classroom.
          </p>
        </section>

        {/* TEDx Farook College */}
        <section className="mb-5 p-4 rounded-4 shadow-lg" style={{ backgroundColor: '#222' }}>
          <h2 className="fw-bold mb-3" style={{ color: '#FF2B06', fontSize: '2rem' }}>
            TEDx Pondicherry University
          </h2>
          <p className="fs-5" style={{ lineHeight: '1.8' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio numquam praesentium sit laborum magni, saepe, tempora similique, totam dolorem itaque accusamus! Aperiam perferendis architecto, reiciendis odio reprehenderit repudiandae dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet excepturi a eius accusamus magnam adipisci suscipit pariatur neque. Officia, temporibus! Dolorum voluptate labore consectetur laborum. Est, sapiente omnis. Earum.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;

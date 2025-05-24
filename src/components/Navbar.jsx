import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Use Link instead of <a>
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Function to close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false); // Collapse the navbar
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
      <div className="container-fluid" ref={navbarRef}>
        <Link to="/" className="navbar-brand d-flex flex-column">
          <div>
            <span style={{ color: "red", fontWeight: "bold" }}>TEDx</span>Pondicherry University
          </div>
          <small style={{ fontSize: "0.75rem", color: "white" }}>
            x = independently organized TED event
          </small>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navb-items collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            {["Home", "About", "Speakers", "Sponsors", "Contact"].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

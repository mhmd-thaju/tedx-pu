import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const iconStyle = {
  color: "#e62b1e", // TEDx Red
  fontSize: "1.75rem",
  transition: "transform 0.3s ease, color 0.3s ease",
};

const hoverStyle = {
  color: "#fff", // Turns white on hover
  transform: "scale(1.2)",
};

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  const handleMouseEnter = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  const footerAnimation = {
    animation: "fadeInUp 1s ease-in-out",
  };

  const fadeInUpKeyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{fadeInUpKeyframes}</style>
      <footer className="bg-black text-white py-5" style={footerAnimation}>
        <div className="container text-center">
          {/* Social Section */}
          <h5 style={{ fontWeight: "bold" }}>Follow Us</h5>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <span
              onMouseEnter={() => handleMouseEnter("instagram")}
              onMouseLeave={handleMouseLeave}
              style={
                hoveredIcon === "instagram"
                  ? { ...iconStyle, ...hoverStyle }
                  : iconStyle
              }
            >
              <a
                href="https://www.instagram.com/tedx.pondicherryuniversity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <span
              onMouseEnter={() => handleMouseEnter("linkedin")}
              onMouseLeave={handleMouseLeave}
              style={
                hoveredIcon === "linkedin"
                  ? { ...iconStyle, ...hoverStyle }
                  : iconStyle
              }
            >
              <a
                href="http://www.linkedin.com/in/tedxpondicherryuniversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>

          {/* Bottom Text */}
          <div className="text-center pt-3 mt-4 border-top border-secondary">
            <small>&copy; 2025 TEDx Pondicherry University</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const iconStyle = {
  color: "#bbb",
  fontSize: "1.75rem",
  transition: "transform 0.3s ease, color 0.3s ease",
};

const hoverStyle = {
  color: "#fff",
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
      <footer
        className="bg-black text-white py-5"
        style={footerAnimation}
      >
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-6 mb-4">
              <h5 style={{ fontWeight: "bold" }}>Social</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-3">
                <span
                  onMouseEnter={() => handleMouseEnter("facebook")}
                  onMouseLeave={handleMouseLeave}
                  style={hoveredIcon === "facebook" ? { ...iconStyle, ...hoverStyle } : iconStyle}
                >
                  <FaFacebookF />
                </span>
                <span
                  onMouseEnter={() => handleMouseEnter("twitter")}
                  onMouseLeave={handleMouseLeave}
                  style={hoveredIcon === "twitter" ? { ...iconStyle, ...hoverStyle } : iconStyle}
                >
                  <FaTwitter />
                </span>
                <span
                  onMouseEnter={() => handleMouseEnter("instagram")}
                  onMouseLeave={handleMouseLeave}
                  style={hoveredIcon === "instagram" ? { ...iconStyle, ...hoverStyle } : iconStyle}
                >
                  <FaInstagram />
                </span>
                <span
                  onMouseEnter={() => handleMouseEnter("linkedin")}
                  onMouseLeave={handleMouseLeave}
                  style={hoveredIcon === "linkedin" ? { ...iconStyle, ...hoverStyle } : iconStyle}
                >
                  <FaLinkedinIn />
                </span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <h5 style={{ fontWeight: "bold" }}>Community</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-3">
                <span
                  onMouseEnter={() => handleMouseEnter("whatsapp")}
                  onMouseLeave={handleMouseLeave}
                  style={hoveredIcon === "whatsapp" ? { ...iconStyle, ...hoverStyle } : iconStyle}
                >
                  <FaWhatsapp />
                </span>
              </div>
            </div>
          </div>

          <div className="text-center pt-3 mt-4 border-top border-secondary">
            <small>&copy; 2025 TEDx Pondicherry University</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

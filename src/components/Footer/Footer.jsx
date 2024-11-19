import React from "react";
import LogoImage from "../../assets/Logo.png"; // Importing the logo
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Reusable contact link component for better structure
  const ContactLink = ({ href, icon: Icon, text }) => (
    <div className="contact-item">
      <a href={href} className="contact-link" target="_blank" rel="noopener noreferrer">
        <Icon className="contact-icon" />
        <p>{text}</p>
      </a>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo Section */}
          <div className="logo-container">
            <img src={LogoImage} alt="Company Logo" className="footer-logo" />
          </div>
          {/* Copyright Text */}
          <p className="copyright-text">
            &copy; {currentYear} Company. All rights reserved.
          </p>
        </div>

        {/* Content Section */}
        <div className="footer-content">
          <p>Senior Full Stack Developer (Web & Mobile): Harut Azatyan</p>

          {/* Location Section */}
          <div className="location-info">
            <FaMapMarkerAlt className="location-icon" />
            <p>Location: Yerevan, Armenia</p>
          </div>

          {/* Contact Information Section */}
          <div className="contact-info">
            <ContactLink
              href="tel:+37496454503"
              icon={FaPhone}
              text="+37496454503"
            />
            <ContactLink
              href="mailto:harutazatyan45@gmail.com"
              icon={FaEnvelope}
              text="harutazatyan45@gmail.com"
            />
            <ContactLink
              href="https://wa.me/37496454503"
              icon={FaWhatsapp}
              text="WhatsApp"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

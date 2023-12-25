// Footer.jsx

import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="company-info">
          <h3>Your Company Name</h3>
          <p>
            Address Line 1, Address Line 2
            <br />
            City, State, Zip Code
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@yourcompany.com
          </p>
        </div>

        <div className="social-links">
  <h3>Connect with Us</h3>
  {/* Use '#' as a placeholder href */}
  <a href="#" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
</div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

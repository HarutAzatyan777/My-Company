// Footer.jsx

import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="company-info">
          <h3>Code Red</h3>
          <p>
            Armenia
            <br />
            Yerevan
            <br />
            Phone:+374-41-455-440
            <br />
            Email: developerhar@gmail.com
          </p>
        </div>

        <div className="social-links">
  <h3>Connect with Us</h3>
  {/* Use '#' as a placeholder href */}
  <a href="https://www.facebook.com/profile.php?id=61552807097380" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://www.linkedin.com/in/harut-azatyan/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.linkedin.com/in/harut-azatyan/" target="_blank" rel="noopener noreferrer">
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

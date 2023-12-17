// Header.jsx

import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="main-navigation">
        <ul>
          <li><a href="#">Products</a></li>
          <li className="dropdown">
            <a href="#">Features</a>
            <div className="dropdown-content">
              {/* Dropdown menu items */}
              <a href="#">Feature 1</a>
              <a href="#">Feature 2</a>
              <a href="#">Feature 3</a>
            </div>
          </li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Plans & Pricing</a></li>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

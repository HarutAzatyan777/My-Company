import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

const Header = ({ currentLanguage, onLanguageSwitch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showOnly, setShowOnly] = useState(false);


  const handleLanguageSwitch = () => {
    setShowOnly(!showOnly);
    onLanguageSwitch(); // Call your existing language switch logic here
  };

  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  

  return (
    
    <header className={`main-header ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
    <div className="logo-container">
        <NavLink to="/">
          <img src="Logo.png" alt="Logo" className="logo" />
        </NavLink>
      </div>
      <nav className={`main-navigation ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

         
        <ul>

          <li>
            <ScrollLink to="products" smooth={true} duration={500}>
              Products
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="aboute" smooth={true} duration={500}>
             Aboute Us
            </ScrollLink>
          </li>
          <li className="dropdown">
            <ScrollLink to="Features" smooth={true} duration={500}>
              Features
            </ScrollLink>
            <div className="dropdown-content">
              {/* Dropdown menu items */}
              <ScrollLink to="feature1" smooth={true} duration={500}>
                Feature 1
              </ScrollLink>
              <ScrollLink to="feature2" smooth={true} duration={500}>
                Feature 2
              </ScrollLink>
              <ScrollLink to="feature3" smooth={true} duration={500}>
                Feature 3
              </ScrollLink>
            </div>
          </li>
          
          <li>
            <ScrollLink to="priceplans" smooth={true} duration={500}>
              Price Plans
            </ScrollLink>
          </li>
          <li>
            <NavLink to="/resources">
              Resources
            </NavLink>
          </li>
          <li>
            <ScrollLink to="login" smooth={true} duration={500}>
              Log In
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="get-started" smooth={true} duration={500}>
              Get Started
            </ScrollLink>
          </li>
             
      <input
        type="checkbox"
        className="check-toggle-round-flat"
        id="toggleSwitch"
        checked={showOnly}
        onChange={handleLanguageSwitch}
      />
      <label htmlFor="toggleSwitch" className="switch">
        <span className="on">En</span>
        <span className="off">Am</span>
      </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

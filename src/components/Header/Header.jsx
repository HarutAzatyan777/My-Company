import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css'; // Import your CSS file for styling

const Header = ({ currentLanguage, onLanguageSwitch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`main-header ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo-container">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
      <nav className={`main-navigation ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul>
          <div className="switch2">
            <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" onChange={onLanguageSwitch} checked={currentLanguage === 'FIN'} />
            <label htmlFor="language-toggle"></label>
            <span className="on">FIN</span>
            <span className="off">ENG</span>
          </div>

          <li>
            <ScrollLink to="products" smooth={true} duration={500}>
              Products
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
            <ScrollLink to="Resources" smooth={true} duration={500}>
              Resources
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="priceplans" smooth={true} duration={500}>
              Price Plans
            </ScrollLink>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

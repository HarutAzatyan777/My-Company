// About.js

import React from 'react';
import './Aboute.css'

function About() {
  return (
    <div className="about-container" id='aboute'>
      <span className='aboute-us'>
      <h2>About Us</h2>
      </span>
    
      <div className="about-content">
        <div className="about-item">
          <h3>2+ Years in Industry</h3>
          <p>We have been serving in the industry for over two years, gaining valuable experience and expertise.</p>
        </div>
        <div className="about-item">
          <h3>100+ Projects Successfully Done</h3>
          <p>We take pride in completing over 100 projects successfully, delivering quality solutions to our clients.</p>
        </div>
        <div className="about-item">
          <h3>70+ Employees</h3>
          <p>Our team consists of more than 70 dedicated and skilled professionals.</p>
        </div>
        <div className="about-item">
          <h3>40+ Ongoing Partnerships</h3>
          <p>We have established over 40 ongoing partnerships with various organizations.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

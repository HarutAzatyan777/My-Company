// Home.jsx

import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Gallery from '../../components/Gallery/Gallery';

function Home() {
  return (
    <div>
      <Header />

      <section className="landing-section">
        <div className="landing-content">
          <h1>Welcome to Our Agency</h1>
          <p>
            We are a team of freelance web developers, ready to bring your ideas to life.
            Whether you need a personal website or a complex business solution, we've got you covered.
          </p>
          <p>
            Our expertise extends to working with in-house teams within businesses.
            Let's collaborate to create innovative and impactful web solutions.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
<Gallery />
   
    </div>
  );
}

export default Home;

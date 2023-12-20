// Home.jsx

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';
import Header from '../../components/Header/Header';
import Services from '../../components/services/services';
import Products from "../Products/Products"

function Home() {
  return (
    <div>
      <Header />

      <section className="landing-section" id="top">
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
          <ScrollLink to="get-started" smooth={true} duration={500}>
            <button className="cta-button">Get Started</button>
          </ScrollLink>
        </div>
      </section>

      <section id="products">
     
       <Products />
      </section>

      <section id="features">
        {/* Add content for the "Features" section */}
        <h2>Key Features</h2>
        {/* Add more content as needed */}
      </section>

      {/* Add other sections as needed, e.g., feature1, feature2, feature3, resources, plans-pricing, login */}

     
      <Services />
    </div>
  );
}

export default Home;

// Services.jsx

import React from 'react';
import './services.css'; // Importing styles for the Services component
import { BusinessSolutionsTemplate, CollaborativeProjectsTemplate, PersonalWebsiteTemplate } from '../Templates/Templates';
import langAM from '../../Translations/lang_am.json';
import langEN from '../../Translations/lang_en.json';

function Services({ currentLanguage}) {
  const translations = currentLanguage === 'am' ? langAM : langEN;
  return (
    <div id="priceplans">
    <section iclassName="services-section">
      <div className='our-services'>
      <h2>Our Services</h2>
      </div>
      <div className="services-container">
        {/* Developer Services */}
        <div className="service-item">
          <h3>{translations.services_Dev}</h3>
          <p>Web development using the latest technologies. Starting at $500.</p>
        </div>

        {/* Design Services */}
        <div className="service-item">
          <h3>Design</h3>
          <p>User-friendly interfaces and visually stunning designs. Starting at $300.</p>
        </div>

        {/* DevOps Services */}
        <div className="service-item">
          <h3>DevOps</h3>
          <p>Streamlining development and deployment processes. Starting at $700.</p>
        </div>

        {/* SEO Services */}
        <div className="service-item">
          <h3>SEO</h3>
          <p>Boost online visibility and organic traffic. Starting at $200.</p>
        </div>

        {/* UI/UX Services */}
        <div className="service-item">
          <h3>UI/UX</h3>
          <p>Creating intuitive and delightful user interfaces. Starting at $400.</p>
        </div>
      </div>

      {/* Plans & Pricing */}
      <section className="pricing-section">
        <h2>Plans & Pricing</h2>
        <div className="pricing-container">
          <div className="pricing-item">
            <h3>Basic</h3>
            <div className="price">$99/month</div>
            <p>Essential features for small businesses and personal projects.</p>
          </div>

          <div className="pricing-item">
            <h3>Pro</h3>
            <div className="price">$199/month</div>
            <p>Advanced features for growing businesses with increased demands.</p>
          </div>

          <div className="pricing-item">
            <h3>Enterprise</h3>
            <div className="price">Contact Us</div>
            <p>Customized solutions for large enterprises. Get in touch for a quote.</p>
          </div>
        </div>
      </section>
      <PersonalWebsiteTemplate />
    <BusinessSolutionsTemplate />
    <CollaborativeProjectsTemplate/>
    </section>
    </div>
  );
}

export default Services;

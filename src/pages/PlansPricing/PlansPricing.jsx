import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './PlansPricing.css';
import langAM from '../../Translations/lang_am.json';
import langEN from '../../Translations/lang_en.json';

const PlansPricing = ({ currentLanguage, handleLanguageSwitch }) => {
  const translations = currentLanguage === 'am' ? langAM : langEN;
  return (

    <div id="priceplans">
   <section className="plans-pricing-container">
      <h2>Plans & Pricing</h2>
      <p>{translations.plans}</p>

      {/* Link to scroll back to the top */}
      <ScrollLink to="get-started" smooth={true} duration={500}>
        Back to Get Started
      </ScrollLink>
    </section>
</div>
 
  );
};

export default PlansPricing;

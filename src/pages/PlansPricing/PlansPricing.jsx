import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './PlansPricing.css';

const PlansPricing = () => {
  return (

    <div id="priceplans">
   <section className="plans-pricing-container">
      <h2>Plans & Pricing</h2>
      <p>This is the Plans & Pricing page content. Add details about your pricing plans here.</p>

      {/* Link to scroll back to the top */}
      <ScrollLink to="get-started" smooth={true} duration={500}>
        Back to Get Started
      </ScrollLink>
    </section>
</div>
 
  );
};

export default PlansPricing;

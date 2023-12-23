import React, { useState } from 'react';
import './GetStarted.css';
import {
  PersonalWebsiteTemplate,
  BusinessSolutionsTemplate,
  CollaborativeProjectsTemplate,
} from '../../components/Templates/Templates';



const GetStartedSection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const minPriceForSales = 100;

  const handleServiceSelect = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const handleGetStartedClick = () => {
    const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0);

    if (totalPrice >= minPriceForSales) {
      setButtonClicked(true);

      // Proceed to ask a question about the kind of site
      let userPreference;
      do {
        userPreference = prompt(
          'Great! You\'ve selected services with a total price of $' +
            `${totalPrice}. What kind of site do you want? (Please choose from the options below)\n\n` +
            '1. Personal\n2. Business\n3. Collaborative'
        );

        if (userPreference === null) {
          // User clicked Cancel
          return;
        }
        // Check if the input is a valid number between 1 and 3
      } while (!/^[1-3]$/.test(userPreference));

      const options = [
        <PersonalWebsiteTemplate />,
        <BusinessSolutionsTemplate />,
        <CollaborativeProjectsTemplate />,
      ];
      const selectedOption = options[parseInt(userPreference) - 1];

      alert(`Awesome! Here's your selected template:\n\n${selectedOption}`);
      // You may navigate or perform other actions here based on the user's response
    } else {
      alert(`The minimum total price for sales is $${minPriceForSales}. Please select additional services.`);
    }
  };

  const handleGetInTouchClick = () => {
    const subject = 'Interested in Web Development Services';
    const body = `Hello, I'm interested in your web development services. Can we get in touch to discuss further?`;

    const mailtoLink = `mailto:harutazatyan45@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <div id='get-started'>
    <section className={`get-started-section ${buttonClicked ? 'green-bg' : ''}`}>
      <div className="get-started-content">
        <h2>Get Started with Our Services</h2>
        <p>
          Welcome to our agency! We offer a wide range of web development services to cater to your needs.
        </p>
        <div
  className={`service-card ${selectedServices.includes('Personal Websites') ? 'selected-card' : ''}`}
  onClick={() => handleServiceSelect({ name: 'Personal Websites', price: 50 })}
>
          <h3>Personal Websites</h3>
          <p>
            Need a personal website to showcase your portfolio or blog? We can create a stunning and responsive website tailored to your style.
          </p>
          <p>Price: $50</p>
        </div>
        <div
  className={`service-card ${selectedServices.includes('Business Solutions') ? 'selected-card' : ''}`}
  onClick={() => handleServiceSelect({ name: 'Business Solutions', price: 80 })}
>
          <h3>Business Solutions</h3>
          <p>
            Running a business? We specialize in developing complex and scalable web solutions to address your business challenges.
          </p>
          <p>Price: $80</p>
        </div>
        <div
  className={`service-card ${selectedServices.includes('Collaborative Projects') ? 'selected-card' : ''}`}
  onClick={() => handleServiceSelect({ name: 'Collaborative Projects', price: 120 })}
>
          <h3>Collaborative Projects</h3>
          <p>
            Work with our team to integrate seamlessly with your in-house teams. Let's collaborate to bring innovative and impactful web solutions to life.
          </p>
          <p>Price: $120</p>
        </div>
        <p>
          Ready to get started? Click the button below to begin your journey with us.
        </p>
        <button className={`cta-button ${buttonClicked ? 'green-button' : ''}`} onClick={handleGetStartedClick}>
          Get Started Now
        </button>

        {/* Add Get in Touch button */}
        <button className="cta-button" onClick={handleGetInTouchClick}>
          Get in Touch
        </button>
      </div>
    </section>
  </div>
  );
};

export default GetStartedSection;
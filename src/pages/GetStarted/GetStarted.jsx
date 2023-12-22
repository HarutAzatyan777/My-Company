import React, { useState } from 'react';
import './GetStarted.css'

const GetStartedSection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const minPriceForSales = 100; // Set your minimal price for sales

  const handleServiceSelect = (service) => {
    // Assuming services have a "price" property
    setSelectedServices([...selectedServices, service]);
  };

  const handleGetStartedClick = () => {
    const totalPrice = selectedServices.reduce((total, service) => total + service.price, 0);

    if (totalPrice >= minPriceForSales) {
      // Proceed with the Get Started action
      alert(`Get Started Now! Total Price: $${totalPrice}`);
      // You may navigate or perform other actions here
    } else {
      alert(`The minimum total price for sales is $${minPriceForSales}. Please select additional services.`);
    }
  };

  const handleGetInTouchClick = () => {
    const subject = 'Interested in Web Development Services';
    const body = `Hello, I'm interested in your web development services. Can we get in touch to discuss further?`;

    // Create the mailto link with subject and body
    const mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <div id='get-started'>
  <section  className="get-started-section">
      <div className="get-started-content">
        <h2>Get Started with Our Services</h2>
        <p>
          Welcome to our agency! We offer a wide range of web development services to cater to your needs.
        </p>
        <div className="service-card" onClick={() => handleServiceSelect({ name: 'Personal Websites', price: 50 })}>
          <h3>Personal Websites</h3>
          <p>
            Need a personal website to showcase your portfolio or blog? We can create a stunning and responsive website tailored to your style.
          </p>
          <p>Price: $50</p>
        </div>
        <div className="service-card" onClick={() => handleServiceSelect({ name: 'Business Solutions', price: 80 })}>
          <h3>Business Solutions</h3>
          <p>
            Running a business? We specialize in developing complex and scalable web solutions to address your business challenges.
          </p>
          <p>Price: $80</p>
        </div>
        <div className="service-card" onClick={() => handleServiceSelect({ name: 'Collaborative Projects', price: 120 })}>
          <h3>Collaborative Projects</h3>
          <p>
            Work with our team to integrate seamlessly with your in-house teams. Let's collaborate to bring innovative and impactful web solutions to life.
          </p>
          <p>Price: $120</p>
        </div>
        <p>
          Ready to get started? Click the button below to begin your journey with us.
        </p>
        <button className="cta-button" onClick={handleGetStartedClick}>
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

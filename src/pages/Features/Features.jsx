// Features.jsx

import React from 'react';
import './Features.css'

const FeatureItem = ({ icon, title, description }) => (
  <div className="feature-item">
    <i className={`fas ${icon}`}></i>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      icon: 'fa-code',
      title: 'Custom Development',
      description: 'We provide tailored solutions to meet your unique business requirements.',
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile Responsiveness',
      description: 'Our designs and applications are optimized for seamless mobile experiences.',
    },
    {
      icon: 'fa-cogs',
      title: 'Scalable Architecture',
      description: 'Built with scalability in mind, ensuring your system can grow with your business.',
    },
    {
      icon: 'fa-paint-brush',
      title: 'Creative Design',
      description: 'Beautiful and user-friendly designs that make a lasting impression.',
    },
    {
      icon: 'fa-comments',
      title: 'Effective Communication',
      description: 'Transparent and open communication throughout the development process.',
    },
    {
      icon: 'fa-clock',
      title: 'Timely Delivery',
      description: 'We value your time; our projects are delivered on schedule without compromising quality.',
    },
  ];

  return (
    <div id='Features' className="features-container">
      <h2>Our Features</h2>
      <div className="features-list">
        {featuresData.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;

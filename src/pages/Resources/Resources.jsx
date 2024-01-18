// Resources.jsx

import React from 'react';
import './Resources.css'

const ResourceItem = ({ title, description, link }) => (
  <div className="resource-item">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Learn More
    </a>
  </div>
);

const Resources = () => {
  const resourcesData = [
    {
      title: 'React Documentation',
      description: 'Official documentation for React.js. A must-read for React developers.',
      link: 'https://reactjs.org/',
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation on web technologies including HTML, CSS, and JavaScript.',
      link: 'https://developer.mozilla.org/',
    },
    {
      title: 'GitHub',
      description: 'Explore code repositories, collaborate with developers, and contribute to open source projects.',
      link: 'https://github.com/',
    },
    {
      title: 'Stack Overflow',
      description: 'Community-driven Q&A platform for programming-related questions.',
      link: 'https://stackoverflow.com/',
    },
    {
      title: 'CSS Tricks',
      description: 'Tips, tricks, and techniques for front-end development with a focus on CSS.',
      link: 'https://css-tricks.com/',
    },
    {
      title: 'Dev.to',
      description: 'A community for programmers to share and discover programming resources.',
      link: 'https://dev.to/',
    },
  ];

  return (
    <div id='Recurces' className="resources-container">
      <h2>Developer Resources</h2>
      <div className="resources-list">
        {resourcesData.map((resource, index) => (
          <ResourceItem key={index} {...resource} />
        ))}
      </div>
      {/* <div className="codeRedDescription">
      <h1>Welcome to CodeRed: Your Digital Marketing Revolution</h1>
      <p>
        At CodeRed, we're not just a digital marketing agency; we're pioneers
        on a mission to redefine online brand experiences. As the founder, I
        envisioned CodeRed as a dynamic hub where creativity, innovation, and
        expertise converge to set your brand ablaze in the digital sphere.
      </p>
      <p>
        Our team of digital artisans at CodeRed specializes in crafting
        cutting-edge, data-driven campaigns. Every project is a canvas where we
        paint with pixels, code, and creativity to deliver unparalleled results.
      </p>
      <p>
        What makes CodeRed exceptional is our commitment to excellence. We
        don't just follow trends; we set them. Our strategies are bespoke,
        tailored to amplify your brand's unique identity and achieve your
        goals.
      </p>
      <p>
        Collaboration is at the heart of CodeRed. As your trusted digital
        partner, we work closely with you to bring your vision to life. Whether
        you're looking to enhance your social media presence, optimize your
        website for search engines, or launch a captivating email campaign, we
        have the tools and talent to make it happen.
      </p>
      <p>
        In the world of CodeRed, success is not a destination; it's a continuous
        journey. Our relentless pursuit of staying at the forefront of digital
        marketing trends ensures that your brand remains relevant, engaging, and
        ahead of the competition.
      </p>
      <p>
        Buckle up for a thrilling ride into the future of digital marketing—
        welcome to CodeRed, where innovation meets impact!
      </p>
    </div> */}
    </div>
  );
};

export default Resources;

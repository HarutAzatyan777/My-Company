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
    <div id='Reurces' className="resources-container">
      <h2>Developer Resources</h2>
      <div className="resources-list">
        {resourcesData.map((resource, index) => (
          <ResourceItem key={index} {...resource} />
        ))}
      </div>
    </div>
  );
};

export default Resources;

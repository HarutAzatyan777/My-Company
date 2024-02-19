

import React from 'react';
import './Resources.css'

const ResourceItem = ({ title, description, link, image }) => (
  <div className="resource-item">
    <img src={image} alt={title} className='resource-img' />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Learn More
    </a>
  </div>
);

const Resources = () => {
  const resourcesData = [
    //1
    {
      title: 'React Documentation',
      description: 'Official documentation for React.js. A must-read for React developers.',
      link: 'https://reactjs.org/',
      image: 'Resource/React.webp',
    },
    //2
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation on web technologies including HTML, CSS, and JavaScript.',
      link: 'https://developer.mozilla.org/',
      image: 'Resource/Mdm.png',
    },
    //3
    {
      title: 'GitHub',
      description: 'Explore code repositories, collaborate with developers, and contribute to open source projects.',
      link: 'https://github.com/',
      image: 'Resource/git.png',
    },
    //4
    // {
    //   title: 'Stack Overflow',
    //   description: 'Community-driven Q&A platform for programming-related questions.',
    //   link: 'https://stackoverflow.com/',
    //   image: 'Resource/stc.png',
    // },
    //5
    {
      title: 'CSS Tricks',
      description: 'Tips, tricks, and techniques for front-end development with a focus on CSS.',
      link: 'https://css-tricks.com/',
      image: 'Resource/css.png',
    },
    //6
    // {
    //   title: 'Dev.to',
    //   description: 'A community for programmers to share and discover programming resources.',
    //   link: 'https://dev.to/',
    //   image: 'Resource/',
    // },
    // 7
    {
      title: 'Docker Documentation',
      description: 'Official documentation for Docker, a platform for developing, shipping, and running applications in containers.',
      link: 'https://docs.docker.com/',
      image: 'Resource/docker.png',
    },
    //8
    {
      title: 'Microsoft Azure',
      description: 'Cloud computing service by Microsoft for building, testing, deploying, and managing applications and services.',
      link: 'https://azure.microsoft.com/',
      image: 'Resource/azure.png',
    },
    //9
    {
      title: '.NET Documentation',
      description: 'Official documentation for the .NET platform, a framework for building Windows, web, mobile, and IoT applications.',
      link: 'https://dotnet.microsoft.com/',
      image: 'Resource/net.png',
    },
    //10
    {
      title: 'React Native Documentation',
      description: 'Official documentation for React Native, a framework for building native apps using React.',
      link: 'https://reactnative.dev/',
      image: 'Resource/nat.png',
    },
    //11
    {
      title: 'Amazon Web Services (AWS)',
      description: 'Cloud computing services by Amazon for building, deploying, and managing applications.',
      link: 'https://aws.amazon.com/',
      image: 'Resource/awm.png',
    },
    //12
    {
      title: 'Caspio Documentation',
      description: 'Official documentation for Caspio, a low-code platform for building online database applications without coding.',
      link: 'https://www.caspio.com/',
      image: 'Resource/caspio.png',
    },
    //13
    {
      title: 'Angular Documentation',
      description: 'Official documentation for Angular, a platform for building web, mobile, and desktop applications.',
      link: 'https://angular.io/',
      image: 'Resource/angular.png',
    },
    //14
    // {
    //   title: 'Vue.js Documentation',
    //   description: 'Official documentation for Vue.js, a progressive JavaScript framework for building user interfaces.',
    //   link: 'https://vuejs.org/',
    //   image: 'Resource/vue.png',
    // },
    //15
    {
      title: 'Three.js Documentation',
      description: 'Official documentation for Three.js, a JavaScript library for creating 3D graphics in the browser.',
      link: 'https://threejs.org/',
      image: 'Resource/Three.png',
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
    </div>
  );
};

export default Resources;






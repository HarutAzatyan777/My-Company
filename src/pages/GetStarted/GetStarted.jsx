// GetStarted.jsx

import React from 'react';
import MultiPageForm from '../MultiPageForm/MultiPageForm'; // Adjust the import path based on your project structure
import "./GetStarted.css"

const GetStarted = () => {
  return (
    <div id='get-started' className="container">
      <h2>Get Started</h2>
      <MultiPageForm />
    </div>
  );
};

export default GetStarted;

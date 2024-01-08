// GetStarted.jsx

import React from 'react';
import MultiPageForm from '../MultiPageForm/MultiPageForm'; // Adjust the import path based on your project structure
import "./GetStarted.css"
import langAM from '../../Translations/lang_am.json';
import langEN from '../../Translations/lang_en.json';

const GetStarted = ({ currentLanguage, handleLanguageSwitch }) => {
  const translations = currentLanguage === 'am' ? langAM : langEN;
  return (
    <div id='get-started' className="container">
      <h2>{translations.get_started_button}</h2>
      <MultiPageForm currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}  />
    </div>
  );
};

export default GetStarted;

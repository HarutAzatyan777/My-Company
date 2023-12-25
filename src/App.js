// App.jsx

import React, { useState } from 'react';
import RoutesConfig from './routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import langAM from './Translations/lang_am.json';
import langEN from './Translations/lang_en.json';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('am'); // Default to Armenian

  const handleLanguageSwitch = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === 'am' ? 'en' : 'am'));
  };

  return (
    <div className="app">
      <Header currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch} />
      <main className="main-content">
        <Home currentLanguage={currentLanguage} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

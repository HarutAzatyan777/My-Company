// App.jsx

import React from 'react';
import RoutesConfig from './routes';
import Footer from './components/Footer/Footer';

// import Home from './pages/Home/Home';



const App = () => {
  // const [currentLanguage, setCurrentLanguage] = useState('am'); // Default to Armenian

  // const handleLanguageSwitch = () => {
  //   setCurrentLanguage((prevLanguage) => (prevLanguage === 'am' ? 'en' : 'am'));
  // };

  return (
    <div className="app">
    
      <main className="main-content">
   <RoutesConfig />
      </main>
      <Footer />
    </div>
  );
};

export default App;

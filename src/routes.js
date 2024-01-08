import React, { useEffect,useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import PlansPricing from './pages/PlansPricing/PlansPricing';
import Login from './pages/Login/Login';
import GetStarted from './pages/GetStarted/GetStarted';
import Products from './pages/Products/Products';
import { Link as ScrollLink } from 'react-scroll';
import Header from './components/Header/Header';

const RoutesConfig = () => {
  // Set up scroll behavior on route change
  useEffect(() => {
    const handleScroll = () => {
      // Handle any scroll-related logic here
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
  const handleLanguageSwitch = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === 'am' ? 'en' : 'am'));
  };

  const [currentLanguage, setCurrentLanguage] = useState('am');
  return (

    
    <Routes>
      <Route
        path="/"
        element={
          <div>
            {/* Add a link to scroll to the top */}
            <ScrollLink to="top" smooth={true} duration={500}>
              
            </ScrollLink>

            {/* Your existing Home component */}
            <Header currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch} />
            <Home currentLanguage={currentLanguage}/>
          </div>
        }
      />

      {/* Add routes for other pages */}
      <Route path="resources" element={<Resources />} />
      <Route path="plans-pricing" element={<PlansPricing />} />
      <Route path="login" element={<Login />} />
      <Route path="get-started" element={<GetStarted />} />
      <Route path="products" element={<Products />} />
    </Routes>
  );
};

export default RoutesConfig;

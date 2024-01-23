// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import PlansPricing from './pages/PlansPricing/PlansPricing';
import Login from './pages/Login/Login';
import GetStarted from './pages/GetStarted/GetStarted';
import Products from './pages/Products/Products';
import Album from './pages/Products/Album';
import Registration from './pages/Registration/Registration';
import ReferalLink from './pages/ReferalLink/ReferalLink';

// Create a Layout component
const Layout = ({ children, currentLanguage, onLanguageSwitch }) => {
  return (
    <div>
      {/* Add a link to scroll to the top */}
      <ScrollLink to="top" smooth={true} duration={500}>
        {/* Scroll to Top */}
      </ScrollLink>

      {/* Header component */}
      <Header currentLanguage={currentLanguage} onLanguageSwitch={onLanguageSwitch} />
     
      {/* Page content */}
      {children}
    </div>
  );
};

// Main RoutesConfig component
const RoutesConfig = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth); // replace with your selector
  const [currentLanguage, setCurrentLanguage] = useState('am');

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  const handleLanguageSwitch = () => {
    setCurrentLanguage((prevLanguage) => (prevLanguage === 'am' ? 'en' : 'am'));
  };

  return (
    <Routes>
      {/* Wrap each page component with the Layout */}
      <Route
        path="/"
        element={
          <Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}>
            <Home currentLanguage={currentLanguage} />
          </Layout>
        }
      />

      <Route path="/resources" element={<Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><Resources /></Layout>} />
      <Route path="/plans-pricing" element={<Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><PlansPricing /></Layout>} />
      <Route path="/login" element={<Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><Login /></Layout>} />
      <Route path="/get-started" element={<Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><GetStarted /></Layout>} />
      <Route path="/products" element={<Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><Products /></Layout>} />
      <Route path="/album" element={<Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><Album /></Layout>} />
      <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><Login /></Layout>} />
      <Route path="/register" element={isAuth ? <Navigate to="/" /> : <Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><Registration /></Layout>} />
      <Route path="/referal" element={<Layout currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch}><ReferalLink /></Layout>} />
    </Routes>
  );
};

export default RoutesConfig;

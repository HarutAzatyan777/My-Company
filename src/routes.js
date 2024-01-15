import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import PlansPricing from './pages/PlansPricing/PlansPricing';
import Login from './pages/Login/Login';
import GetStarted from './pages/GetStarted/GetStarted';
import Products from './pages/Products/Products';
import { Link as ScrollLink } from 'react-scroll';
import Header from './components/Header/Header';
import Album from './pages/Products/Album';
import Registration from './pages/Registration/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

const RoutesConfig = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth); // replace with your selector

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

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            {/* Add a link to scroll to the top */}
            <ScrollLink to="top" smooth={true} duration={500}>
              Scroll to Top
            </ScrollLink>

            {/* Your existing Home component */}
            <Header currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch} />
            <Home currentLanguage={currentLanguage} />
          </div>
        }
      />

      {/* Add routes for other pages */}
      <Route path="resources" element={<Resources />} />
      <Route path="plans-pricing" element={<PlansPricing />} />
      <Route path="login" element={<Login />} />
      <Route path="get-started" element={<GetStarted />} />
      <Route path="products" element={<Products />} />
      <Route path="Album" element={<Album />} />
      <Route path="/login" element={isAuth ? <Navigate to="/blogHome" /> : <Login />} />
      <Route path="/register" element={isAuth ? <Navigate to="/blogHome" /> : <Registration />} />
    </Routes>
  );
};

export default RoutesConfig;

import React, { useEffect } from 'react';
import RoutesConfig from './routes';
import Footer from './components/Footer/Footer';
import ReactGA from 'react-ga';
import { animateScroll as scroll } from 'react-scroll'; // Import the scroll module
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-RZR37FSYKG');

    // Track page view
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Scroll to the top when the component mounts
    scroll.scrollToTop();
  }, []);

  return (
    <div className="app">
      <Analytics/>
      <main className="main-content">
        <RoutesConfig />
      </main>
      <Footer />
    </div>
  );
};

export default App;

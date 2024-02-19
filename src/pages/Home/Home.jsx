// Home.jsx

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';
import Services from '../../components/services/services';
import Products from "../Products/Products"
import GetStarted from '../GetStarted/GetStarted';
import Features from '../Features/Features';
import Resources from '../Resources/Resources';
import Aboute from '../Aboute/Aboute'
import langAM from '../../Translations/lang_am.json';
import langEN from '../../Translations/lang_en.json';
import ReferalLink from '../ReferalLink/ReferalLink';
// import ChatComponent from '../../components/SocketIo/ChatComponent';



function Home({ currentLanguage, handleLanguageSwitch }) {
  const translations = currentLanguage === 'en' ? langAM : langEN;

  return (
    <div>
 

      <section className="landing-section" id="top">
        <div className="landing-content">
          <h1>{translations.welcome_message}</h1>
          <p>{translations.intro_paragraph1}</p>
          <p>{translations.intro_paragraph2}</p>
          <ScrollLink to="get-started" smooth={true} duration={500}>
            <button className="cta-button">{translations.get_started_button}</button>
          </ScrollLink>
        </div>
      </section>

      <section id="products">
        <Products currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch} />
      </section>

    {/* <ChatComponent />  */}
      <Aboute />
      <Services />
      <Features />
      <Resources />
      <section id="getstarted">
   
   <GetStarted currentLanguage={currentLanguage} onLanguageSwitch={handleLanguageSwitch} />
</section>
      <ReferalLink />


    </div>
    
  );
}

export default Home;

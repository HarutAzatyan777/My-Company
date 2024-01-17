// ReferalLink.jsx

import React, { useState,useEffect } from 'react';
import "./ReferalLink.css";

// Define or import referralLinks
const referralLinks = [
  { url: "https://www.digitalocean.com/?refcode=7ab6a2f045f2&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge", image: require('../../assets/ref/download.jpg'), alt: "DigitalOcean Referral Badge" },

];

const ReferralLink = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const linksPerPage = 3; // Number of links to show per page

  const handleNextPage = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % Math.ceil(referralLinks.length / linksPerPage));
  };

  const handleButtonClick = (pageNumber) => {
    setPageIndex(pageNumber - 1); // Subtract 1 to convert page number to zero-based index
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPageIndex((prevIndex) => (prevIndex + 1) % Math.ceil(referralLinks.length / linksPerPage));
    }, 5000); // Change every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const visibleLinks = referralLinks.slice(pageIndex * linksPerPage, (pageIndex + 1) * linksPerPage);

  return (
    <div>
      <section className='referral-section'>
        <div className='referral-links'>
          <p>
            {visibleLinks.map((link, index) => (
              <a key={index} href={link.url}>
                <img  src={link.image} alt={link.alt} className="reel-animation" />
              </a>
            ))}
          </p>

          
        </div>
      
        {/* Commented out the manual next button since it's not needed anymore */}
        {/* <button onClick={handleNextPage}>Next</button> */}
      </section>
      <div className="button-container">
          {[1, 2, 3].map((pageNumber) => (
            <button key={pageNumber} onClick={() => handleButtonClick(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
    </div>
  );
};

export default ReferralLink;
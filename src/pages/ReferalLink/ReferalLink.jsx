// ReferalLink.jsx

import React from 'react';
import "./ReferalLink.css"

const ReferalLink = () => {
  return (
    <div>
   

      <section className='referal-section'>
      
        <p>
        <a href="https://www.digitalocean.com/?refcode=7ab6a2f045f2&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" /></a>
        </p>
       
        <p>
          Here is your referral link for Product B: <a href="your-referral-link-for-product-b" target="_blank" rel="noopener noreferrer">Product B Referral</a>
        </p>
   
      </section>

      

      {/* Add more sections as needed for other referral links */}
    </div>
  );
};

export default ReferalLink;

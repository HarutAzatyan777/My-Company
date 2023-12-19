// Gallery.jsx

import React from 'react';
import './Gallery.css';

function Gallery() {
  const totalItems = 8;
  const duplicatedItems = 3;

  return (
    <div>
      {/* Left-scrolling section */}
      <section className="gallery-container left-scroll">
  <h2>Our Portfolio</h2>
  <div className="gallery">
    {/* Duplicated gallery items for endless scrolling */}
    <div className="gallery-items left-scroll">
      {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
        <div className="gallery-item" key={index}>
          {/* Add an image tag with a dynamic source */}
          <img src={`/website/website${index}.png`} alt={`Website ${index}`} />
          <p className="image-caption">Website {index} </p>
        </div>
      ))}
    </div>
  </div>
  <div className="gallery-2">
    {/* Duplicated gallery items for endless scrolling */}
    <div className="gallery-items-2 right-scroll">
      {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
        <div className="gallery-item-2" key={index}>
          {/* Add an image tag with a dynamic source */}
          <img src={`/website/website${index}.png`} alt={`Website ${index}`} />
          <p className="image-caption">Website {index} </p>
        </div>
      ))}
    </div>
  </div>
</section>


     

    
    </div>
  );
}

export default Gallery;

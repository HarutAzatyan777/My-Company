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
                <img src={`/path/to/website${index}.png`} alt={`Website ${index}`} />
                <p>Website {index} Name</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right-scrolling section */}
      <section className="gallery-container right-scroll">
        <h2>More Projects</h2>
        <div className="gallery">
          {/* Duplicated gallery items for endless scrolling */}
          <div className="gallery-items right-scroll">
            {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
              <div className="gallery-item" key={index}>
                <img src={`/path/to/website${index}.png`} alt={`Website ${index}`} />
                <p>Website {index} Name</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

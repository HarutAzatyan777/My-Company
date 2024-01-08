// Gallery.jsx

import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import './Products.css';

function Gallery() {
  const { t } = useTranslation(); // Initialize the translation hook
  const totalItems = 8;
  const duplicatedItems = 3;

  return (
    <div>
      {/* Left-scrolling section */}
      <section className="gallery-container left-scroll">

        <div className="gallery">
          {/* Duplicated gallery items for endless scrolling */}
          <div className="gallery-items left-scroll">
            {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
              <div className="gallery-item" key={index}>
                {/* Add an image tag with a dynamic source */}
                <img src={`/website/website${index}.png`} alt={`Website ${index}`} />
                <p className="image-caption">{t("let's go")}</p>
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
                <img src={`/website2/website${index}.web`} alt={`Website ${index}`} />
                <p className="image-caption">{t("let's go")} </p>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-3">
          {/* Duplicated gallery items for endless scrolling */}
          <div className="gallery-items-3 left-scroll">
            {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
              <div className="gallery-item-3" key={index}>
                {/* Add an image tag with a dynamic source */}
                <img src={`/website3/website${index}.png`} alt={`Website ${index}`} />
                <p className="image-caption-3">{t("let's go")} </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

export default Gallery;

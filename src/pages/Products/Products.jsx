// Gallery.jsx

import React,{useState} from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Products.css';

function Gallery() {
  const { t } = useTranslation();
  const totalItems = 8;
  const duplicatedItems = 3;

  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleOpen = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div>
      {/* Left-scrolling section */}
      <section className="gallery-container left-scroll">

      <NavLink to="https://www.harutdev.com/" className="nav-link" onClick={toggleOpen}>
         
          <div className="gallery">
            <div className="gallery-items left-scroll">
              {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
                <div className="gallery-item" key={index}>
                  <img src={`/website/website${index}.web`} alt={`Website ${index}`} />
                  <p className="image-caption">{t("let's go")}</p>
                </div>
              ))}
            </div>
          </div>
        </NavLink>

        <NavLink to="https://htmltagss.com/" className="nav-link"> {/* Add NavLink to the second gallery section */}
          <div className="gallery-2">
            <div className="gallery-items-2 right-scroll">
              {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
                <div className="gallery-item-2" key={index}>
                  <img src={`/website2/website${index}.web`} alt={`Website ${index}`} />
                  <p className="image-caption">{t("let's go")}</p>
                </div>
              ))}
            </div>
          </div>
        </NavLink>

        <NavLink to="https://htmltagss.com/ColorGenerator" className="nav-link"> {/* Add NavLink to the third gallery section */}
          <div className="gallery-3">
            <div className="gallery-items-3 left-scroll">
              {Array.from({ length: totalItems * duplicatedItems }, (_, index) => (index % totalItems) + 1).map((index) => (
                <div className="gallery-item-3" key={index}>
                  <img src={`/website3/website${index}.web`} alt={`Website ${index}`} />
                  <p className="image-caption-3">{t("let's go")}</p>
                </div>
              ))}
            </div>
          </div>
        </NavLink>

      </section>
    </div>
  );
}

export default Gallery;

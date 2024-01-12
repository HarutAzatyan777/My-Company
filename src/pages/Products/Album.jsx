// Album.jsx

import React, { useState } from 'react';
import "./Album.css";

function Album() {
  const [selectedCover, setSelectedCover] = useState(null);

  const handleCoverSelection = (coverId) => {
    setSelectedCover(coverId);
  };

  return (
    <div>

      <div className={`main-container ${selectedCover ? 'cover-selected' : ''}`}>
        <div className="coverflow-container">
          <ol className="coverflow-list">
            {/* ... (existing code) */}

            {Array.from({ length: 9 }, (_, index) => index + 1).map(coverNumber => (
              <React.Fragment key={coverNumber}>
                <input type="radio" name="cover-item" id={`cover-${coverNumber}`} />
                <li className="coverflow-item">
                  <label htmlFor={`cover-${coverNumber}`} onClick={() => handleCoverSelection(coverNumber)}>
                    <figure className="album-cover">
                      <img src={`website/website${coverNumber}.png`} alt={`Cover ${coverNumber}`} />
                      <figcaption className="album-name">Album {coverNumber}</figcaption>
                    </figure>
                  </label>
                </li>
              </React.Fragment>
            ))}

          </ol>
        </div>
     
      </div>
      <p>{selectedCover ? `Selected Cover: ${selectedCover}` : 'No cover selected'}</p>
    </div>
  );
}

export default Album;

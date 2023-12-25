// MultiPageForm.jsx

import React, { useState } from 'react';
import './MultiPageForm.css';

const MultiPageForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState({
    name: { id: 'name', value: '' },
    preferredColor: { id: 'preferredColor', value: '' },
    favoriteFeatures: { id: 'favoriteFeatures', value: '' },
    questionnaireAnswers: {
      experience: { id: 'experience', value: '' },
      interest: { id: 'interest', value: '' },
      feedback: { id: 'feedback', value: '' },
    },
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [approximatePrice, setApproximatePrice] = useState(null);

  const handleInputChange = (id, value, category = 'userData') => {
    setUserData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [id]: {
          ...prevData[category][id],
          value,
        },
      },
    }));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleFormSubmit = () => {
    // You can perform actions with the collected data here
    console.log('User preferences:', userData);
    // Add logic to send the data to your server or perform other actions

    // Calculate approximate price (example: based on the length of the user's name and feedback)
    const nameLength = userData.name.value.length;
    const feedbackLength = userData.questionnaireAnswers.feedback.value.length;
    const price = nameLength + feedbackLength;

    // Set the approximate price state
    setApproximatePrice(price);

    // Set the formSubmitted state to true
    setFormSubmitted(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <label>
              Your Name:
              <input
                type="text"
                value={userData.name.value}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </label>
            <br />
            <label>
              Preferred Color:
              <input
                type="text"
                value={userData.preferredColor.value}
                onChange={(e) => handleInputChange('preferredColor', e.target.value)}
              />
            </label>
            <br />
            <label>
              Favorite Features:
              <textarea
                value={userData.favoriteFeatures.value}
                onChange={(e) => handleInputChange('favoriteFeatures', e.target.value)}
              />
            </label>
          </>
        );
      case 2:
        return (
          <>
            <h3>Questionnaire - Page {currentPage}</h3>
            <label>
              How would you rate your experience with our website? (1-5)
              <input
                type="number"
                value={userData.questionnaireAnswers.experience.value}
                onChange={(e) =>
                  handleInputChange('experience', e.target.value, 'questionnaireAnswers')
                }
              />
            </label>
            <br />
            <label>
              What interests you the most on our website?
              <input
                type="text"
                value={userData.questionnaireAnswers.interest.value}
                onChange={(e) =>
                  handleInputChange('interest', e.target.value, 'questionnaireAnswers')
                }
              />
            </label>
            <br />
            <label>
              Any additional feedback or suggestions?
              <textarea
                value={userData.questionnaireAnswers.feedback.value}
                onChange={(e) =>
                  handleInputChange('feedback', e.target.value, 'questionnaireAnswers')
                }
              />
            </label>
          </>
        );
      // Add more cases for additional pages

      default:
        return null;
    }
  };

  const renderThankYou = () => {
    return (
      <div>
        <h3>Thank you for submitting your answers!</h3>
        {approximatePrice !== null && (
          <p>Your approximate price: ${approximatePrice}</p>
        )}
        {/* Display a summary of the user's responses if needed */}
      </div>
    );
  };

  return (
    <div>
      {formSubmitted ? renderThankYou() : renderPage()}
      <br />
      {!formSubmitted && (
        <>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={currentPage === 5 ? handleFormSubmit : handleNextPage}>
            {currentPage === 5 ? 'Submit' : 'Next'}
          </button>
        </>
      )}
    </div>
  );
};

export default MultiPageForm;

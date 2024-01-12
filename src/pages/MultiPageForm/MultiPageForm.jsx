import React, { useState } from 'react';
import './MultiPageForm.css'; // Import your styles here
// import langAM from '../../Translations/lang_am.json';
// import langEN from '../../Translations/lang_en.json';
import questionsData from './questionsData.json';

// Separate functional component for rendering questions
const Question = ({ text, options, userData, currentPage, handleInputChange }) => (
  <div className={`popup__content ${currentPage < questionsData.length && 'question-visible'}`}>
    <h5 className="quiz__question">{text}</h5>
    {options.map((option, index) => (
      <label key={index}>
        <input
          type={options.length > 0 ? 'radio' : 'text'}
          name={`question${currentPage + 1}`}
          value={option}
          checked={userData[`question${currentPage + 1}`]?.value === option}
          onChange={() => handleInputChange(`question${currentPage + 1}`, option)}
        />
        {option}
      </label>
    ))}
  </div>
);

const PopupContent = ({ formSubmitted, approximatePrice }) => (
  <div className="popup__content popup__content6">
    <h2 className="popup__title">Great! Here is the perfect series for you: ....</h2>
    <img src="thank.web" alt="website" className="popup__final-img" />
    {approximatePrice !== null && <p>Your approximate price: ${approximatePrice}</p>}
  </div>
);

const MultiPageForm = ({ currentLanguage, handleLanguageSwitch }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userData, setUserData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [approximatePrice, setApproximatePrice] = useState(null);
  // const translations = currentLanguage === 'am' ? langAM : langEN;

  const { text, options } = questionsData[currentPage];

  const handleInputChange = (id, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [id]: { ...prevData[id], value },
    }));
  };

  const handleNextPage = () => {
    if (userData[`question${currentPage + 1}`]?.value) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleFormSubmit = () => {
    // Example: Assign different prices based on the answers
    let totalLength = Object.values(userData).reduce((sum, question) => sum + question.value.length, 0);

    // Adjust the totalLength based on specific answers
    if (userData.question1?.value === 'Business Project') {
      totalLength -= 3; // Subtract 3 from the total length for a Business Project
    }

    // Calculate approximate price
    let approximatePrice;
    if (totalLength <= 50) {
      approximatePrice = 200;
    } else if (totalLength <= 100) {
      approximatePrice = 500;
    } else {
      approximatePrice = 1000;
    }

    // Set the approximate price state
    setApproximatePrice(approximatePrice);
    setFormSubmitted(true);
  };

  return (
    <div>
    {formSubmitted ? (
      <PopupContent formSubmitted={formSubmitted} approximatePrice={approximatePrice} />
    ) : (
      <div className="popup">
        <Question
          text={text}
          options={options}
          userData={userData}
          currentPage={currentPage}
          handleInputChange={handleInputChange}
        />
<div className='PN'>
<button className='previous' onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button className='send' onClick={currentPage === questionsData.length - 1 ? () => { handleFormSubmit(); } : handleNextPage}>
          {currentPage === questionsData.length - 1 ? 'Send' : 'Next'}
        </button>
</div>
 
      </div>
    )}
  </div>
);
};

export default MultiPageForm;

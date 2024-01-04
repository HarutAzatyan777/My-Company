import React, { useState } from 'react';
import './MultiPageForm.css';

const questionsData = [
  {
    id: 'intro',
    text: 'We are a team of freelance web developers, ready to bring your ideas to life. How can we assist you today?',
    options: ['Start a New Project', 'Enhance Existing Project', 'Explore Collaboration Opportunities', 'Other'],
  },
  {
    id: 'question1',
    text: 'What type of page are you looking for?',
    options: ['Personal Page', 'Business Page', 'E-commerce', 'Other'],
  },
  {
    id: 'question2',
    text: 'Select your preferred option for question 2:',
    options: ['Option A', 'Option B', 'Option C', 'Other'],
  },
  {
    id: 'question3',
    text: 'Describe the website you have in mind:',
    options: [], // No options for an open-ended question
  },
];

const MultiPageForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [userData, setUserData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [approximatePrice, setApproximatePrice] = useState(null);

  const { text, options } = questionsData[currentPage];

  const handleInputChange = (id, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [id]: { ...prevData[id], value },
    }));
  };

  const handleNextPage = () => {
    // Proceed to the next question only if the current question has been answered
    if (userData[`question${currentPage + 1}`]?.value) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleFormSubmit = () => {
    // Perform actions with the collected data
    console.log('User preferences:', userData);

    // Example: Calculate approximate price based on the length of the answers
    const totalLength = Object.values(userData).reduce(
      (sum, question) => sum + question.value.length,
      0
    );

    // Set the approximate price state
    setApproximatePrice(totalLength);

    // Set the formSubmitted state to true
    setFormSubmitted(true);
  };

  return (
    <div>
    {formSubmitted ? (
      <div className="popup__content popup__content6">
        <h2 className="popup__title">Great! Here is the perfect series for you: ....</h2>
        <img
          src=""
          alt="website"
          className="popup__final-img"
        />
        {approximatePrice !== null && <p>Your approximate price: ${approximatePrice}</p>}
      </div>
    ) : (
      <div className="popup">
        <div className={`popup__content ${currentPage < questionsData.length && 'question-visible'}`}>
          {currentPage < questionsData.length && (
            <>
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
            </>
          )}
        </div>

        <button  className='previous' onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={currentPage === questionsData.length - 1 ? handleFormSubmit : handleNextPage}>
          {currentPage === questionsData.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    )}
  </div>
  );
};

export default MultiPageForm;

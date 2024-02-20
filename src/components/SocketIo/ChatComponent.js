// ChatComponent.js

import React, { useState, useEffect, useRef } from 'react';
import instance from '../../Axios';
import './ChatComponent.css'; // Import the CSS file
import simulateBotResponse from './botResponses'; // Import the botResponses file

const questions = [
  'Tell me about your web development services',
  'What mobile app development services do you offer?',
  // ... (other questions)
];

const ChatComponent = () => {
  const [messageInput, setMessageInput] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isQuestionSelected, setIsQuestionSelected] = useState(false);
  const [hoveredQuestion, setHoveredQuestion] = useState(null);
  const [clickedQuestion, setClickedQuestion] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();

    // Add event listener for clicks on the document
    document.addEventListener('click', handleDocumentClick);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await instance.get('/chat-component-data');
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      await instance.post('/chat-component-data', { data: messageInput });

      // Update the local state with the new user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageInput, sender: 'user' },
      ]);

      // If the user selected a question, simulate a response based on the selected question
      if (isQuestionSelected) {
        const botResponse = await simulateBotResponse(selectedQuestion);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
        setIsQuestionSelected(false); // Reset the question selected state after responding
      }

      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMessageInput('');
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    setMessageInput(question); // Set the selected question as the message input
    setIsQuestionSelected(true); // Update the state to indicate a question is selected
    setClickedQuestion(question); // Set the clicked question for styling
  };

  const handleMouseEnter = (question) => {
    setHoveredQuestion(question);
  };

  const handleMouseLeave = () => {
    setHoveredQuestion(null);
  };

  const toggleChat = () => {
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen);
  };

  const handleDocumentClick = (e) => {
    // Close the chat if the click is outside of the chat container
    if (chatContainerRef.current && !chatContainerRef.current.contains(e.target)) {
      setIsChatOpen(false);
    }
  };

  return (
    <div ref={chatContainerRef} className={`chat-container ${isChatOpen ? 'open' : ''}`}>
      {isChatOpen && (
        <div className="chat-content">
          <div className="message-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}
              >
                {message.sender === 'bot' ? (
                  <p>{`Bot: ${message.text}`}</p>
                ) : (
                  <p>{`User: ${message.text}`}</p>
                )}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="input"
            />
            <ul className={`question-container ${isChatOpen ? 'hidden' : ''}`}>
              {questions.map((question) => (
                <li
                  key={question}
                  onClick={() => handleQuestionSelect(question)}
                  onMouseEnter={() => handleMouseEnter(question)}
                  onMouseLeave={handleMouseLeave}
                  className={`question ${hoveredQuestion === question ? 'hovered' : ''} ${
                    clickedQuestion === question ? 'clicked' : ''
                  }`}
                >
                  {question}
                </li>
              ))}
            </ul>
            <button onClick={sendMessage} className="button">
              Send
            </button>
          </div>
        </div>
      )}
      <button onClick={toggleChat} className="round-button">
        <i className={`material-icons type2 for-closed ${isChatOpen ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>

        </i>
        {isChatOpen ? '' : ''}
      </button>
    </div>
  );
};

export default ChatComponent;

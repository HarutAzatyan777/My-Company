import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = async () => {
    try {
      // Make a POST request to the server to send the message
      await axios.post('/socket-io-data', { data: messageInput });

      // Optionally, update the local state or perform any other actions
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMessageInput(''); // Clear the input field after sending the message
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;

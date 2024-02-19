import React, { useState, useEffect } from 'react';
import instance from '../../Axios'; // Import the Axios instance

const ChatComponent = () => {
  const [messageInput, setMessageInput] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();
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
      if (selectedQuestion) {
        const botResponse = await simulateBotResponse(selectedQuestion);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
        setSelectedQuestion(null); // Reset selected question after responding
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
  };

  const simulateBotResponse = async (userMessage) => {
    // Simulate bot responses based on user-selected questions
    switch (userMessage.toLowerCase()) {
      case 'tell me about your web development services':
        return "Bot: Our web development services include creating responsive and user-friendly websites. Whether it's a corporate site or an e-commerce platform, we've got you covered!";
      case 'what mobile app development services do you offer?':
        return "Bot: Transform your ideas into reality with our mobile app development services. From iOS to Android, we build apps that stand out in the digital marketplace.";
      case 'how can you assist with data science projects?':
        return "Bot: Dive into the world of data science with us. Uncover actionable insights and make informed decisions through advanced analytics and machine learning.";
      case 'what will your name be?':
        return "Bot: My name is ChatBot. How can I assist you today?";
      case 'what website would you like?':
        return "Bot: We can help you create a custom website tailored to your needs. Do you have specific requirements in mind?";
      case 'do you have a server?':
        return "Bot: Yes, we have servers to host and deploy your applications. What specific server-related information are you looking for?";
      case 'what services do they provide?':
        return "Bot: We provide a range of services including web development, mobile app development, data science, cloud computing, IoT, cybersecurity, UI/UX design, and more. How can we assist you?";
      case 'how can I contact you?':
        return "Bot: You can contact us through our website's contact page or by sending an email to info@example.com.";
      case 'tell me about your UI/UX design services':
        return "Bot: Our UI/UX design services focus on creating visually appealing and user-friendly interfaces. We prioritize user experience to ensure your digital products are intuitive and engaging.";
      // Add more cases for additional questions
      default:
        return "Bot: I'm sorry, I didn't understand. Please ask about our digital, tech, or programming services.";
    }
  };

  return (
    <div>
      <div style={styles.messageContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              textAlign: message.sender === 'bot' ? 'left' : 'right',
            }}
          >
            {message.sender === 'bot' ? (
              <p>{`Bot: ${message.text}`}</p>
            ) : (
              <p>{`User: ${message.text}`}</p>
            )}
          </div>
        ))}
      </div>
      <div style={styles.questionContainer}>
        <p>Select a question:</p>
        <ul>
          <li onClick={() => handleQuestionSelect('Tell me about your web development services')}>
            Tell me about your web development services
          </li>
          <li onClick={() => handleQuestionSelect('What mobile app development services do you offer?')}>
            What mobile app development services do you offer?
          </li>
          <li onClick={() => handleQuestionSelect('How can you assist with data science projects?')}>
            How can you assist with data science projects?
          </li>
          <li onClick={() => handleQuestionSelect('What will your name be?')}>
            What will your name be?
          </li>
          <li onClick={() => handleQuestionSelect('What website would you like?')}>
            What website would you like?
          </li>
          <li onClick={() => handleQuestionSelect('Do you have a server?')}>
            Do you have a server?
          </li>
          <li onClick={() => handleQuestionSelect('What services do they provide?')}>
            What services do they provide?
          </li>
          <li onClick={() => handleQuestionSelect('How can I contact you?')}>
            How can I contact you?
          </li>
          <li onClick={() => handleQuestionSelect('Tell me about your UI/UX design services')}>
            Tell me about your UI/UX design services
          </li>
          {/* Add more questions here */}
        </ul>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  messageContainer: {
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '10px',
    border: '1px solid #ccc',
  },
  message: {
    marginBottom: '8px',
    padding: '4px',
    borderBottom: '1px solid #eee',
  },
  questionContainer: {
    marginTop: '10px',
  },
  inputContainer: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '8px',
    marginRight: '8px',
    width: '70%',
  },
  button: {
    padding: '8px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ChatComponent;

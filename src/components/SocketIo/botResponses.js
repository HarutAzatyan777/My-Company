// botResponses.js

const simulateBotResponse = async (userMessage) => {
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
  
  export default simulateBotResponse;
  
// src/App.js
import React, { useEffect } from 'react';
import RoutesConfig from './routes';
import reportWebVitals from './reportWebVitals'; // Import the modified reportWebVitals file

const App = () => {

  return (
    <div className="app">
 
      <main className="main-content">
        <RoutesConfig />
      </main>
    
    </div>
  );
};

export default App;
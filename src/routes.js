import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';


const RoutesConfig = () => {

return (
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  );
};

export default RoutesConfig;
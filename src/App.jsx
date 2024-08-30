import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;

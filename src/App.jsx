import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home.jsx';
import ProjectPage from './pages/Project.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Project" element={<ProjectPage/ >} />
      </Routes>
    </Router>
  );
};

export default App;

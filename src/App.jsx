import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import CRMPage from './pages/CRMPage.jsx';
import MobileApp from './pages/MobileApp.jsx';
import Movie from './pages/Movie.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/crmpage" element={<CRMPage />} />
        <Route path="/mobile" element={<MobileApp />} />
        <Route path="/movie" element={<Movie />} />

      </Routes>
    </Router>
  );
};

export default App;

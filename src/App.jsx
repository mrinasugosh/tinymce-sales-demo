import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Assuming you have some base styling here
import PowerPasteDemo from './PowerPasteDemo';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Moodle Moot - TinyMCE Demos</h1>
      <Link to="/powerpaste">
        <button className="go-to-editor-button">Power Paste</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/powerpaste" element={<PowerPasteDemo />} />
      </Routes>
    </Router>
  );
};

export default App;

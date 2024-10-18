import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Assuming you have some base styling here
import PowerPasteDemo from './components/PowerPasteDemo';
import EnhancedTable from './components/EnhancedTable';
import AdvancedTemplates from './components/AdvancedTemplates';

const HomePage = () => {
  return (
    <div className="home-container">
  <h1 style={{ textAlign: 'center' }}>TinyMCE Demos</h1>
  <div className="button-grid">
    <Link to="/powerpaste">
      <button className="go-to-editor-button">Power Paste</button>
    </Link>
    <Link to="/enhancedtable">
      <button className="go-to-editor-button">Enhanced Table</button>
    </Link>
    <Link to="/advancedtemplates">
      <button className="go-to-editor-button">Advanced Templates</button>
    </Link>
    <Link to="/spellchecker">
      <button className="go-to-editor-button">Spell Checker</button>
    </Link>
    <Link to="/accessibilitychecker">
      <button className="go-to-editor-button">Accessibility Checker</button>
    </Link>
    <Link to="/ai">
      <button className="go-to-editor-button">AI Assistant</button>
    </Link>
  </div>
</div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/powerpaste" element={<PowerPasteDemo />} />
        <Route path="/enhancedtable" element={<EnhancedTable />} />
        <Route path="/advancedtemplates" element={<AdvancedTemplates />} />
        <Route path="/spellchecker" element={<HomePage />} />
        <Route path="/accessibilitychecker" element={<HomePage />} />
        <Route path="/ai" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;

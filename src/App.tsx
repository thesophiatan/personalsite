import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Now from './pages/Now';
import About from './components/About';
import ProjectsPage from './pages/ProjectsPage';
import Notes from './components/Notes';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now" element={<Now />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/blog" element={<Navigate to="/notes" replace />} />
          <Route path="/blog/:postId" element={<Navigate to="/notes" replace />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
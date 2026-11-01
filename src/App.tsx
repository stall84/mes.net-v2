import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import WorkExperience from './pages/work-experience';
import About from './pages/about';
import React from 'react';

// Create a placeholder for the home page
const HomePage: React.FC = () => {
  return (
    <main>
      <h1>Personal Website</h1>
      <p>Welcome to my personal website. This is a placeholder for your content.</p>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
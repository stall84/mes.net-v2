import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" aria-label="Home">MS</Link>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/work-experience" className="nav-link">Work Experience and Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Get in Touch (Contact)</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
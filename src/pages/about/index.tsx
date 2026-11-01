import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <main className="about">
      <header className="about-header">
        <h1>About Me</h1>
        <p>Get to know more about my background and interests</p>
      </header>
      
      <section className="about-section">
        <h2>Personal Information</h2>
        <p>Hello! I'm a software developer with experience in building web applications.</p>
        <p>My passion lies in creating efficient, user-friendly solutions that solve real-world problems.</p>
      </section>
      
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript/TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Cloud Infrastructure</li>
        </ul>
      </section>
    </main>
  );
};

export default About;
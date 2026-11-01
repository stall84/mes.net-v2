import React from 'react';
import './work-experience.css';

const WorkExperience: React.FC = () => {
  return (
    <main className="work-experience">
      <header className="work-experience-header">
        <h1>Work Experience and Projects</h1>
        <p>Details about my professional background and projects</p>
      </header>
      
      <section className="experience-section">
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <p className="experience-company">Company Name</p>
          <p className="experience-duration">Jan 2020 - Present</p>
          <p>Responsibilities and achievements...</p>
        </div>
      </section>
      
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project Name</h3>
          <p>Description of the project...</p>
        </div>
      </section>
    </main>
  );
};

export default WorkExperience;
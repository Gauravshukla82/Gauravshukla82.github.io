import React from 'react';


function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-card">
          <img src="project-img-1.jpg" alt="Project Image" />
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">Project 1 description</p>
          <p className="project-tech-stack">Tech stack used: HTML, CSS, JavaScript</p>
          <a href="https://github.com/project1" target="_blank" className="project-github-link">GitHub Repository</a>
          <a href="https://project1-demo.com" target="_blank" className="project-deployed-link">Demo</a>
        </div>
        <div className="project-card">
          <img src="project-img-2.jpg" alt="Project Image" />
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">Project 2 description</p>
          <p className="project-tech-stack">Tech stack used: React, Node.js</p>
          <a href="https://github.com/project2" target="_blank" className="project-github-link">GitHub Repository</a>
          <a href="https://project2-demo.com" target="_blank" className="project-deployed-link">Demo</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

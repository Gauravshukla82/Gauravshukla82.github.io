import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-card">
          <img src="skills-img-1.jpg" alt="Skills Image" className="skills-card-img" />
          <h3 className="skills-card-name">Skill 1</h3>
        </div>
        <div className="skills-card">
          <img src="skills-img-2.jpg" alt="Skills Image" className="skills-card-img" />
          <h3 className="skills-card-name">Skill 2</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;

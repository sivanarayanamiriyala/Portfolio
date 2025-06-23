import React from 'react';
import './SkillCard.css'; // Import your CSS file for styling

function SkillCard({ name, logo, alt }) {
  return (
    <div className="skill-card">
      <img src={logo} alt={alt} className="skill-logo" />
      <h3 className="skill-name">{name}</h3>
    </div>
  );
}

export default SkillCard;

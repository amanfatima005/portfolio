import React from "react";
import "./SkillCard.css";

// Reusable component — receives "name" and "icon" as props
function SkillCard({ name, icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <p className="skill-name">{name}</p>
    </div>
  );
}

export default SkillCard;

import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

// Array of skill data — passed down as props to each SkillCard
const skillsData = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Git", icon: "🌿" },
  { name: "GitHub", icon: "🐙" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

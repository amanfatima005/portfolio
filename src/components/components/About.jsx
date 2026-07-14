import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I'm a 5th semester Computer Science student who enjoys building
        complete, working applications rather than just studying theory.
        I've built projects ranging from PHP/MySQL habit trackers to
        assembly-language games, and I'm now transitioning into the
        MERN stack (MongoDB, Express, React, Node.js).
      </p>

      <div className="about-details">
        <div className="about-card">
          <h3>Field of Study</h3>
          <p>Computer Science (5th Semester)</p>
        </div>
        <div className="about-card">
          <h3>Career Goal</h3>
          <p>Full-Stack &amp; AI Engineer — building deployable, real-world products</p>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-welcome">Welcome, I'm</p>
      <h1 className="hero-name">Aman Fatima</h1>
      <p className="hero-intro">
        A Computer Science student passionate about full-stack development
        and AI engineering — currently building projects with the MERN stack
        and exploring how AI can power real applications.
      </p>
      <a href="#contact" className="hero-btn">Contact Me</a>
    </section>
  );
}

export default Hero;

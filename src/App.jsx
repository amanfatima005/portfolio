import React from "react";
import Navbar from "./components/components/Navbar";
import Hero from "./components/components/Hero";
import About from "./components/components/About";
import Skills from "./components/components/Skills";
import Contact from "./components/components/Contact";
import Footer from "./components/components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

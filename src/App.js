import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />

      <AnimatedSection id="hero">
      <Hero />
      </AnimatedSection>

      <AnimatedSection id="about">
      <About />
      </AnimatedSection>

      <AnimatedSection id="skills">
      <Skills />
      </AnimatedSection>

      <AnimatedSection id="projects">
      <Projects />
      </AnimatedSection>

      <AnimatedSection id="experience">
      <Experience />
      </AnimatedSection>

      <AnimatedSection id="contact">
      <Contact />
      </AnimatedSection>
     
      <Footer />
    </div>
  );
}

export default App;
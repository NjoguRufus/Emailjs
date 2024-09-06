// src/App.js
import React from 'react';
import AnimatedSection from './components/AnimatedSection';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="hero">
          <h1>My Portfolio</h1>
          <p>Welcome to my professional showcase.</p>
          <a href="#projects">View Projects</a>
        </section>
      </header>
      <main>
        <AnimatedSection />
        <section id="projects">
          {/* Project previews */}
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <ContactForm />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Rufus Felix Njogu</p>
      </footer>
    </div>
  );
}

export default App;

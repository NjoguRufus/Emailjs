// src/App.js
import React from 'react';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section id="contact">
          <h2>Contact Me</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;

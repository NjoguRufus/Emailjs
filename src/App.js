// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

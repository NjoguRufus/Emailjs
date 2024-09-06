// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-800 text-white py-20 px-6">
      <div className="absolute inset-0">
        <img src="hero-background.jpg" alt="Background" className="object-cover w-full h-full"/>
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Showcasing my projects and skills.</p>
        <a href="#projects" className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg hover:bg-orange-600 transition duration-300">View Projects</a>
      </div>
    </section>
  );
};

export default HeroSection;

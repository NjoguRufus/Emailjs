// src/components/AnimatedSection.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 py-20"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-lg mb-8">Here are some of the projects I've worked on.</p>
        {/* Project components will go here */}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;

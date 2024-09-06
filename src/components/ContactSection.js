// src/components/ContactSection.js
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;

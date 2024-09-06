// src/components/ContactForm.js
import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_sz6rcz2', 'template_hv50yr7', e.target, 'wAlkgY5I_wSdPGYf8')
      .then((result) => {
          alert('Message sent successfully!');
      }, (error) => {
          alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-lg">Name</label>
            <input type="text" id="name" name="name" className="w-full mt-1 p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-lg">Email</label>
            <input type="email" id="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-lg">Message</label>
            <textarea id="message" name="message" className="w-full mt-1 p-2 border border-gray-300 rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

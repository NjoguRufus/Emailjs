// src/components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <label>Message:
        <textarea name="message" value={form.message} onChange={handleChange} required />
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">MyStore</Link>
        <div>
          <Link to="/cart" className="mr-4">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

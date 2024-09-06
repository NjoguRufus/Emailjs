import React, { useState } from 'react';
import ProductsSection from '../components/ProductsSection';

const HomePage = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', image: '/path/to/image1.jpg', price: '$20', description: 'This is a great product.' },
    { id: 2, name: 'Product 2', image: '/path/to/image2.jpg', price: '$30', description: 'This is another great product.' },
    // Add more products
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Store</h1>
      <ProductsSection products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;

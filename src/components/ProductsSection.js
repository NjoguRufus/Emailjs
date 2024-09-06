import React, { useState, useEffect } from 'react';
import React from 'react';
import ProductCard from './ProductCard'; // Ensure this path is correct


const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or use static data
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsSection;

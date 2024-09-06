// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  if (!product) {
    return <div>Product not available</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image || '/default-image.jpg'} // Provide a fallback image
        alt={product.name || 'Product image'}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{product.name || 'Product Name'}</h3>
        <p className="text-gray-600 mb-4">{product.description || 'Description not available'}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">{product.price || '$0.00'}</span>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => console.log('Add to Cart clicked')}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';

const ProductsSection = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-bold mb-2">{product.price}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;

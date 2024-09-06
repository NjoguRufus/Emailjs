import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p>{product.description}</p>
      <p className="text-lg font-bold">{product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};


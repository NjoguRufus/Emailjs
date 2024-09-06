import React from 'react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'product-image1.jpg',
      price: '$20',
      description: 'This is a great product.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'product-image2.jpg',
      price: '$30',
      description: 'This is another great product.',
    },
    // Add more products here
  ];

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-lg font-bold mb-2">{product.price}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

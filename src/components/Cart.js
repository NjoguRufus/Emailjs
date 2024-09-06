import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-4">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">Total: ${total}</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

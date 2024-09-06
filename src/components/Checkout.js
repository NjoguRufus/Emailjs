import React from 'react';

const Checkout = () => {
  const handlePayment = () => {
    // Implement payment logic here
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <button onClick={handlePayment} className="bg-green-500 text-white py-2 px-4 rounded">Pay Now</button>
    </div>
  );
};

export default Checkout;

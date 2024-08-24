import React from 'react';

function Product() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <img 
        src="https://via.placeholder.com/300" 
        alt="Product Name" 
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-semibold mb-2">Product Name</h2>
      <p className="text-gray-600 mb-4">
        This is a brief description of the product. It highlights the key features and benefits to entice the customer.
      </p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold">$49.99</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;

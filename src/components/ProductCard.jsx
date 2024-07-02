// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md w-[30%] h-fit bg-gradient-to-tl from-zinc-900 to-zinc-800 rounded-lg">
      <div className="relative">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
        {product.isNew && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1">NEW</span>}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <span className="text-gray-100 text-xl font-semibold">${product.price}</span>
        <p className="text-gray-500 text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

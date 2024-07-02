// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[30%] h-fit bg-gradient-to-tl from-zinc-900 to-zinc-800 rounded-lg">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
        {product.isNew && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1">NEW</span>}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-500">{product.model}</p>
        <span className="text-gray-100 text-xl font-semibold">${product.price}</span>
        {product.originalPrice && (
          <span className="text-gray-200 text-sm line-through">${product.originalPrice}</span>
        )}
        <p className="text-gray-500 text-sm">Designer: {product.designer}</p>
      </div>
    </div>
  );
};

export default ProductCard;

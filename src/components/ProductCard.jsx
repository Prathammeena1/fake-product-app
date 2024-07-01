// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
        {product.isNew && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1">NEW</span>}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-500">{product.model}</p>
        <p className="text-gray-900 font-semibold">${product.price}</p>
        {product.originalPrice && (
          <p className="text-gray-400 line-through">${product.originalPrice}</p>
        )}
        <p className="text-gray-500 text-sm">Designer: {product.designer}</p>
      </div>
    </div>
  );
};

export default ProductCard;

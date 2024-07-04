// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 min-h-[320px] shadow-md w-[23.5%] h-fit bg-gradient-to-tl from-zinc-900 to-zinc-800 rounded-lg flex-shrink-0">
      <div className="h-48 w-[85%] overflow-hidden rounded-lg text-center mx-auto">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold">{product.title.split(" ").slice(0,3).join(" ") + "..."}</h3>
        <span className="text-gray-100 text-xl font-semibold">${product.price}</span>
        <p className="text-gray-500 text-xs">{product.description.split(" ").slice(0,7).join(" ") + "..."}</p>
      </div>
    </div>
  );
};

export default ProductCard;

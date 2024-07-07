import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 min-h-[380px] h-fit shadow-md w-[23.5%] cursor-pointer bg-gradient-to-tl from-zinc-900 to-zinc-800 rounded-lg flex-shrink-0">
      <div className="h-48 w-[85%] overflow-hidden rounded-lg text-center mx-auto">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold">{product.title.split(" ").slice(0,3).join(" ") + "..."}</h3>
        <span className="text-gray-100 text-xl font-semibold">${product.price}</span>
        <p className="text-gray-500 text-xs">{product.description.split(" ").slice(0,3).join(" ") + "..."}</p>
      </div>
      <div className='flex gap-1 justify-between mt-4'>
      <Link to={`/edit/${product.id}`} className='bg-gradient-to-br from-blue-500 to-blue-950 hover:bg-gradient-to-br hover:from-blue-950 hover:to-blue-500 transition-all ease-in-out text-zinc-200 font-[600] text-xl rounded-md px-7 py-1'>Edit</Link>
      <Link to='/create' className='bg-gradient-to-br from-red-950 to-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-950 transition-all ease-in-out text-zinc-200 font-[600] text-xl rounded-md px-7 py-1'>Delete</Link>

      </div>
    </div>
  );
};

export default ProductCard;

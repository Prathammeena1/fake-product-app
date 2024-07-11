import React from "react";
import { Link } from "react-router-dom";
import { setData } from "./store/slice/productsSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ product, products }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    const filteredProducts = products.filter((p) => p.id !== product.id);
    dispatch(setData(filteredProducts));
    toast.success("Product Deleted Successfully!");
  };

  return (
    <div className="p-4 min-h-[380px] h-fit shadow-md w-[23.5%] cursor-pointer bg-gradient-to-tl from-zinc-900 to-zinc-800 rounded-lg flex-shrink-0">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 w-[85%] overflow-hidden rounded-lg text-center mx-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-bold">
            {product.title.split(" ").slice(0, 3).join(" ") + "..."}
          </h3>
          <span className="text-gray-100 text-xl font-semibold">
            ${product.price}
          </span>
          <p className="text-gray-500 text-xs">
            {product.description.split(" ").slice(0, 3).join(" ") + "..."}
          </p>
        </div>
      </Link>
      <div className="flex gap-1 justify-between mt-4">
        <Link to={`/edit/${product.id}`} className="">
          <button className="bg-zinc-800 text-zinc-100 border border-zinc-700 border-b-4 font-medium overflow-hidden relative px-8 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-zinc-200 shadow-zinc-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Edit
          </button>
        </Link>
        <button
          onClick={deleteHandler}
          className="bg-zinc-800 text-zinc-100 border border-zinc-700 border-b-4 font-medium overflow-hidden relative px-8 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
          <span className="bg-zinc-200 shadow-zinc-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { setData } from "./store/slice/productsSlice";
import { toast } from "react-toastify";

const Product = ({ products }) => {
  const [product, setproduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setproduct(products.find((p) => p.id == id));
  }, [products]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = () => {
    const filteredProducts = products.filter((p) => p.id !== product.id);
    dispatch(setData(filteredProducts));
    navigate("/");
    toast.success('Product Deleted Successfully!');
  };

  return (
    <div className="main h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg p-4 flex gap-4 flex-wrap overflow-y-auto">
      {product ? (
        <div className="flex gap-8 overflow-hidden items-center justify-center">
          <div className="left w-[30%] max-h-[55vh] h-fit rounded-md overflow-hidden">
            <img
              src={product.image}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="right w-[30vw]">
            <h1 className="mb-4 text-4xl font-semibold">{product.title}</h1>
            <h1 className="mb-2 text-3xl font-bold">$ {product.price}</h1>
            <h1 className="text-sm font-light text-zinc-400">{product.description}</h1>
            <div className="flex gap-1 justify-between mt-4 w-[48%]">
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
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Product;

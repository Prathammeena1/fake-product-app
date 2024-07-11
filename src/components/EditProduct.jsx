import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./store/reducers/productReducers";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
    id: "",
  });

  useEffect(() => {
    const productToEdit = products.find((product) => product.id == id);
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((p) =>
      p.id == product.id ? product : p
    );
    dispatch(setData(updatedProducts));
    navigate('/')
    toast.success('Product Updated Successfully!');
  };

  return (
    <div className="main md:h-[65vh] md:w-[78vw] h-[70vh] w-full  bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg p-4 py-2 flex gap-4 items-center justify-center flex-wrap overflow-y-auto">
      <div className="w-full max-w-md bg-gradient-to-tl from-zinc-800 to-zinc-700 rounded-lg shadow-md p-8 py-4 text-zinc-200">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Product Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={handleChange}
              className="mt-1 block w-full text-zinc-200 bg-transparent px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium">
              Product Image Url
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="mt-1 block w-full text-zinc-200 bg-transparent px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="mt-1 block w-full text-zinc-200 bg-transparent px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full text-zinc-200 bg-transparent px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="mt-1 block w-full text-zinc-200 bg-transparent px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

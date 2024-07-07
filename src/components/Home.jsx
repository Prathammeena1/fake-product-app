import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetData } from './store/reducers/productReducers';

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsSlice);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(asyncGetData());
  }, [filteredProducts]);

  // Filter products based on search parameters
  useEffect(() => {
    if (products.length > 0) {
      setFilteredProducts(products);

      if (search.trim() !== '') {
        const searchParams = new URLSearchParams(search);
        if (searchParams.has('category')) {
          const category = decodeURIComponent(searchParams.get('category'));
          setFilteredProducts(products.filter((product) => product.category === category));
        } else if (searchParams.has('search')) {
          const inpSearch = decodeURIComponent(searchParams.get('search'));
          setFilteredProducts(products.filter((product) => product.title.toLowerCase().includes(inpSearch.toLowerCase())));
        }
      }
    }
  }, [search, products]);

  return (
    <div className='main h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg p-4 flex gap-4 flex-wrap overflow-y-auto'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, i) => <ProductCard key={product.id} product={product} products={products} />)
      ) : (
        <h1 className='text-2xl'>Loading...</h1>
      )}
    </div>
  );
};

export default Home;

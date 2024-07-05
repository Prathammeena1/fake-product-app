// src/App.js
import React, { useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetData } from './components/store/reducers/productReducers';



function App() {

  const dispatch = useDispatch()

  const {products} = useSelector(state => state.productsSlice)
    
  useEffect(() => {
    dispatch(asyncGetData())
  }, [products])



  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-zinc-950 p-5 text-zinc-200">
      <Header/>
      <div className='flex mt-5 gap-5'>
        <Nav products={products} />
        <Home products={products} />
      </div>
      
    </div>
  );
}

export default App;

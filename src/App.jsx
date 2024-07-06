import React, { useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetData } from './components/store/reducers/productReducers';
import MainRouter from './components/Routes/MainRouter';


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
        <MainRouter/>
      </div>
      
    </div>
  );
}

export default App;

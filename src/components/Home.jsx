import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {asyncGetData} from './store/reducers/productReducers'
import ProductCard from './ProductCard'


const Home = () => {
  // const [products, setproducts] = useState([])

  const dispatch = useDispatch()

  const {products} = useSelector(state => state.productsSlice)
  
  console.log(products)

  
  useEffect(() => {
    dispatch(asyncGetData())
  }, [products])
  
  // console.log(products)
  return (
    <div className=' main h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg p-4 flex gap-4 flex-wrap overflow-y-auto'>
      {products.length > 0 ?
      products.map((product,i) => <ProductCard key={i} product={product}  />)
    : <h1 className='text-2xl '>Loading...</h1>}
    </div>
  )
}

export default Home
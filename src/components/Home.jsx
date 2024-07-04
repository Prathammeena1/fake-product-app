import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Axios from './axios/Axios';


const Home = () => {
  const [products, setproducts] = useState([])

  const getData = async () =>{
    const response = await Axios.get('/products?limit=10')
    setproducts(response.data)
  }
  
  useEffect(() => {
    getData()
  }, [products])
  
  console.log(products)
  return (
    <div className=' main h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg p-4 flex gap-4 flex-wrap overflow-y-auto'>
      {products.map((product,i) => <ProductCard key={i} product={product}  />)}
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Axios from './axios/Axios';


const Home = () => {
  const [products, setproducts] = useState([])

  const getData = async () =>{
    const response = await Axios.get('/products?limit=5')
    setproducts(response.data)
  }
  
  useEffect(() => {
    getData()
  }, [products])
  
  console.log(products)
  return (
    <div className='h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg flex gap-4 p-4'>
      {products.map((product,i) => <ProductCard key={i} product={product}  />)}
    </div>
  )
}

export default Home
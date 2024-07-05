import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'


const Home = ({products}) => {
  return (
    <div className=' main h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg p-4 flex gap-4 flex-wrap overflow-y-auto'>
      {products.length > 0 ?
      products.map((product,i) => <ProductCard key={i} product={product}  />)
    : <h1 className='text-2xl '>Loading...</h1>}
    </div>
  )
}

export default Home
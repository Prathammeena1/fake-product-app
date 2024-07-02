import React from 'react'
import ProductCard from './ProductCard';


const Home = () => {
  const products = [
    { name: 'Nike', model: 'Roshe One Essential ID', price: 110, designer: 'Unknown', image: '/images/nike.png' },
    { name: 'Adidas', model: 'NMD City Sock 2', price: 130, designer: 'Kith Unveil', isNew: true, image: '/images/adidas.png' },
    { name: 'Reebok', model: 'Classic Nylon Magic', price: 90, originalPrice: 110, designer: 'Unknown', image: '/images/reebok.png' },
    // Add more products as needed
  ];
  return (
    <div className='h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg flex gap-4 p-4'>
      {products.map((product,i) => <ProductCard key={i} product={product}  />)}
    </div>
  )
}

export default Home
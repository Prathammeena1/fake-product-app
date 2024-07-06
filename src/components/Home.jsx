import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useLocation } from 'react-router-dom'


const Home = ({products}) => {
  const [filteredProducts, setfilteredProducts] = useState([])
  const {search} = useLocation()

  useEffect(() =>{
    setfilteredProducts(products)
    if(search.trim() != ''){
      if(search.split('=')[0] == '?category'){
        const category = decodeURIComponent(search.split('=')[1])
        setfilteredProducts(products.filter(product => product.category === category))
      }
      else if(search.split('=')[0] == '?search'){
        const inpSearch = decodeURIComponent(search.split('=')[1])
        setfilteredProducts(products.filter(product => product.title.toLowerCase().includes(inpSearch)));
      }
      
    }
  },[search,products])

  return (
    <div className=' main h-[65vh] w-[78vw] bg-gradient-to-tl from-zinc-600 to-zinc-800 rounded-lg p-4 flex gap-4 flex-wrap overflow-y-auto'>
      {filteredProducts.length > 0 ?
      filteredProducts.map((product,i) => <ProductCard key={product.id} product={product}  />)
    : <h1 className='text-2xl '>Loading...</h1>}
    </div>
  )
}

export default Home
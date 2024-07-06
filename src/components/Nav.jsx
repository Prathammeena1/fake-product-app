import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({products}) => {

  var obj = {}
  products.forEach(product =>{
    if(!obj[product.category]){
      obj[product.category] = product.category
    }
  })
  
  const categories = Object.keys(obj)


  return (
    <div className='h-[65vh] w-[20vw] bg-gradient-to-tl from-zinc-800 to-zinc-700 rounded-lg text-center pt-8'>
        <Link to='/create' className='bg-gradient-to-br from-zinc-400 to-zinc-100 hover:bg-gradient-to-br hover:from-zinc-100 hover:to-zinc-400 transition-all ease-in-out text-zinc-800 font-[600] text-xl rounded-md px-4 py-1'>Add new product</Link>
        <div key={1} className='flex flex-col w-fit ml-10 mt-5'>
            <h1 className='text-xl ml-[-60px] mb-3'>Category</h1>
            {categories.map((category,i) => <div key={i} className="cat1 flex items-center gap-3 ml-2 text-sm">
                <div className="square h-3 w-3 bg-zinc-400 rounded-sm"></div>
                <Link to={`/?category=${category}`}  className='w-fit capitalize'>{category}</Link>
            </div> )}
            
        </div>
    </div>
  )
}

export default Nav
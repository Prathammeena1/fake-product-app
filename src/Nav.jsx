import React from 'react'

const Nav = () => {
  return (
    <div className='h-[65vh] w-[20vw] bg-gradient-to-tl from-zinc-800 to-zinc-700 rounded-lg text-center'>
        <button className='bg-gradient-to-br from-zinc-400 to-zinc-100 hover:bg-gradient-to-br hover:from-zinc-100 hover:to-zinc-400 transition-all ease-in-out text-zinc-800 font-[600] text-xl rounded-md px-4 py-1 mt-8'>Add new product</button>
        <div className='flex flex-col w-fit ml-12 mt-5'>
            <h1 className='text-xl'>Category</h1>
            <div className="cat1 flex items-center gap-3 ml-2 text-lg">
                <div className="square h-3 w-3 bg-zinc-400 rounded-sm"></div>
                <h3 className='w-fit capitalize'>men</h3>
            </div>
        </div>
    </div>
  )
}

export default Nav
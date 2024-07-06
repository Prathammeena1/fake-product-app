import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../CreateProduct'
import Home from '../Home'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default MainRouter
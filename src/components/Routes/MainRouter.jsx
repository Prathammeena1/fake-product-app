import React from 'react'
import { Routes } from 'react-router-dom'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MainRouter
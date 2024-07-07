import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../CreateProduct'
import Home from '../Home'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetData } from '../store/reducers/productReducers'
import EditProduct from '../EditProduct'

const MainRouter = () => {


  const dispatch = useDispatch()

  const {products} = useSelector(state => state.productsSlice)
    
  useEffect(() => {
    dispatch(asyncGetData())
  }, [])


  return (
    <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/create" element={<CreateProduct products={products} />} />
        <Route path="/edit/:id" element={<EditProduct products={products} />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default MainRouter
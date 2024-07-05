import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || [],
}

export const productsSlice = createSlice({
  name: 'counter',
  initialState ,
  reducers: {
    setData : (state,action) =>{
        localStorage.setItem('products', JSON.stringify(action.payload))
    },
  },
})

export const { setData } = productsSlice.actions

export default productsSlice.reducer
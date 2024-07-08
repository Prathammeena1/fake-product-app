import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'counter',
  initialState ,
  reducers: {
    setData : (state,action) =>{
        localStorage.setItem('products', JSON.stringify(action.payload))
    },
    set : (state,action) =>{
        state.products = JSON.parse(localStorage.getItem('products')) || [];
    },
  },
})

export const { setData,set } = productsSlice.actions

export default productsSlice.reducer
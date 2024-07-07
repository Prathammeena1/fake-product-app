import {set} from '../slice/productsSlice.jsx'
export {setData} from '../slice/productsSlice.jsx'
import Axios from '../../axios/Axios';


export const asyncGetData = () => async (dispatch,getstate)=>{
    // const state = getstate().productsSlice
    // const response = await Axios.get('/products?limit=20')
    // dispatch(setData(response.data))
    dispatch(set())
}

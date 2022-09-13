import axios from 'axios'
import { getAllProducts } from './productSlice'

export const fetchAllProducts = () => async (dispatch)=>{
    try {
        const res = await axios.get('/api/v1/products')
        // console.log(res.data.product)
        dispatch(getAllProducts(res.data.product))
        
    } catch (error) {
        console.log('----',error)
    }
}
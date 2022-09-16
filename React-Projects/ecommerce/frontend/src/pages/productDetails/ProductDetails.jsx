import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductDetails } from '../../redux/features/product/productDetails/productDetailsThunk'
import './productDetails.css'

const ProductDetails = (props) => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {productDetails} = useSelector((state) => state.productDetail)

    useEffect(()=>{
        dispatch(fetchProductDetails(id))
    },[dispatch,id])
  return (
    <main className='container-fluid mainProductDetailContainer'>{productDetails.name}</main>
  )
}

export default ProductDetails
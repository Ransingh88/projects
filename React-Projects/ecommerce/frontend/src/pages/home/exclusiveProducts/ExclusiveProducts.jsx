import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../../../components/productCard/ProductCard'
import './exclusiveProducts.css'
import {useDispatch,useSelector} from 'react-redux'
import { fetchAllProducts } from '../../../redux/features/product/productThunks'
import ProductNotFound from '../../../components/notFound/ProductNotFound'
import Loader from '../../../components/layout/loader/Loader'
import { useState } from 'react'

const ExclusiveProducts = () => {
    const dispatch = useDispatch()
    const {products,loading} = useSelector((state)=>state.product)

    useEffect(()=>{
        dispatch(fetchAllProducts())
    },[products])

    const filters = [
        {
            label:'Everything',
            active:true
        },
        {
            label:'popular',
        },
        {
            label:'hot'
        },
        {
            label:'recent'
        },
        {
            label:'products'
        },
        {
            label:'work'
        },
        {
            label:'filter'
        }
    ]
    if(loading){
        return <Loader/>
    }
  return (
    <section className='exclusiveProducts'>
        <h1 className='heading exclusiveProduct-heading'><span>Exclusive</span> Products</h1>
        <div className="exclusiveProduct-filters">
            {filters.map((item,index)=>(
                <p key={index} className={`filters_item ${item.active?'filters_item-active':null}`}>{item.label}</p>
            ))}
        </div>
        {
            products.length === 0 ? <ProductNotFound/> : 
        
        <div className="exclusiveProduct-items">
            {products.map((item,index)=>(
                <ProductCard key={index} {...item} />
            ))}
        </div>
        }
    </section>
  )
}

export default ExclusiveProducts
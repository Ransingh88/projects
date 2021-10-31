import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'
import {ProductCard} from './ProductCard'

const ProductListing = () => {
    const products = useSelector((state) => state.allProduct.products)
    const dispatch = useDispatch()

    console.log(products)

    const getAllProducts = async () => {
        
        const products = await axios.get('https://fakestoreapi.com/products')
        dispatch(setProducts(products.data))
    }

    useEffect(() => {

        getAllProducts()
    },[])
    
    return (
        <div>
            <h1>All Products</h1>
            
        
            {products.map(({ id, title, category, image, price }) => (
                
                <ProductCard key={id} id={ id} title={title} category={category} image={image} price={ price}/>
            ))}
            
        </div>
    )
}

export {ProductListing}

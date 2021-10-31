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
        <div className="ProductList">
            <h2 className="ProductList__heading">All Products</h2>
            
            {products.length === 0 ? (<div className="Loading">Loading products...</div>) :
                <div className="ProductList__productContainer">
                {
                    products.map(({ id, title, category, image, price ,rating}) => (
                
                        <ProductCard key={id} id={id} title={title} category={category} image={image} price={price} rating={rating.count} />
                    ))
                    }
                    </div>
                }
            
        </div>
    )
}

export {ProductListing}

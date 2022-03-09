import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {selectedProduct,removeSelectedProduct} from '../redux/actions/productActions'

const ProductDetails = () => {
    const productId = useParams()
    console.log(productId.id);
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.selectedProduct)
    const {title,category, image, price, description,rating} = productDetails
    
    console.log(productDetails);

    const getProductDetails = async () => {
        const details = await axios.get(`https://fakestoreapi.com/products/${productId.id}`)
        
        dispatch(selectedProduct(details.data))
    }
    
    useEffect(() => {
        if (productId && productId !== "") {
            
            getProductDetails()
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[productId])

    return (
    <>
        {
            Object.keys(productDetails).length === 0 ? (<div className="Loading">Loading product Details...</div>) :
            <>
                    <h2 className="ProductList__heading">Product Details</h2>
                        <div className="ProductDetails">
                            <div className="ProductDetails__image">
                    <img src={image} alt={title} />
                    </div>
                    <div className="ProductDetails__details">
                    <h3 className="ProductDetails__title">{title}</h3>
                    <h4 className="ProductDetails__price">Rs. {price*75}</h4>
                    <h5 className="ProductDetails__catagory">Catagory : {category}</h5>
                    <p className="ProductDetails__desc">{description}</p>
                                <div className="ProductDetails__rating">
                                    <p>⭐ { rating.rate}</p> &nbsp;&nbsp;&nbsp; 
                                    <p>&nbsp; {rating.count} Rating </p>
                    </div>
                    </div>
                        </div>
                        </>
            }
            </>
    )
}

export {ProductDetails}

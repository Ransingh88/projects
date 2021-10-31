import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from '../actionTypes/actionTypes'


const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload:products
    }
}

const selectedProduct = (product) => {
    return {
        type: SET_PRODUCTS,
        payload:product
    }
}


export {setProducts,selectedProduct}
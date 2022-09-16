import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './features/theme/themeSlice'
import productReducer from './features/product/productSlice'
import productDetailsReducer from './features/product/productDetails/productDetailSlice'

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        product:productReducer,
        productDetail:productDetailsReducer
    }
})
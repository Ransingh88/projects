import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './features/theme/themeSlice'
import productReducer from './features/product/productSlice'
import productDetailsReducer from './features/product/productDetails/productDetailSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        product:productReducer,
        productDetail:productDetailsReducer,
        user:userReducer,
    }
})
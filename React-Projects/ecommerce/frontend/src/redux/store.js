import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './features/theme/themeSlice'
import productReducer from './features/product/productSlice'

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        product:productReducer,
    }
})
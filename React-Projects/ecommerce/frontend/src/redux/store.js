import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './features/theme/themeSlice'
import productReducer from './features/product/productSlice'
import productDetailsReducer from './features/product/productDetails/productDetailSlice'
import userReducer from './features/user/userSlice'
import profileReducer from './features/user/profileSlice'
import forgotPasswordSlice from './features/user/forgotPasswordSlice'
import cartSlice from './features/product/cartSlice/cartSlice'
import orderSlice from './features/order/orderSlice'
import myOrderSlice from './features/order/myOrderSlice'
import myOrderDetailsSlice from './features/order/myOrderDetailsSlice'
import newProductSlice from './features/product/createProduct/createProductSlice'
import adminProductReducer from './features/product/adminProduct/adminProductSlice'

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        product:productReducer,
        productDetail:productDetailsReducer,
        user:userReducer,
        profile:profileReducer,
        forgotPassword:forgotPasswordSlice,
        cart:cartSlice,
        order:orderSlice,
        myOrder:myOrderSlice,
        myOrderDetails:myOrderDetailsSlice,
        newProduct:newProductSlice,
        adminProduct:adminProductReducer,
    }
})
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
import adminProductSlice from './features/product/adminProduct/adminProductSlice'
import adminOrderSlice from './features/order/adminOrder/adminOrdersSlice'
import adminUsersSlice from './features/user/adminUsers/adminUsersSlice'
import adminReviewsSlice from './features/user/adminReviews/adminReviewsSlice'

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
        adminProduct:adminProductSlice,
        adminOrder:adminOrderSlice,
        adminUser:adminUsersSlice,
        adminReviews:adminReviewsSlice,
    }
})
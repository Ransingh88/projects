import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import ProductDetails from '../pages/productDetails/ProductDetails'
import Products from '../pages/products/Products'
import Profile from '../pages/profile/Profile'
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute'
import UpdateProfile from '../components/profileUpdate/ProfileUpdate'
import UpdatePassword from '../pages/profile/changePassword/PasswordUpdate'
import ResetPassword from '../pages/profile/resetPassword/ResetPassword'
import Login from '../components/authentication/login/Login'
import Register from '../components/authentication/register/Register'
import ForgotPassword from '../pages/profile/forgotPassword/ForgotPassword'
import Cart from '../pages/cart/Cart'
import Shipping from '../pages/shipping/Shipping'
import ConfirmOrder from '../pages/order/confirmOrder/ConfirmOrder'
import Payment from '../pages/payment/Payment'
import OrderSuccess from '../pages/order/orderSuccess/OrderSuccess'
import NotFound404 from '../components/notFound/NotFound404'

import Order from '../pages/order/Order'
import {ROUTE_CONSTANTS} from '../constants/constants'
import { loadUser } from '../redux/features/user/userThunks'
import OrderDetails from '../pages/order/orderDetails/OrderDetails'
import Dashboard from '../pages/admin/Dashboard'
import DashboardComp from '../pages/admin/dashboardComp/DashboardComp'
import ProductList from '../pages/admin/productList/ProductList'
import CreateProduct from '../pages/admin/createProduct/CreateProduct'
import UpdateProduct from '../pages/admin/updateProduct/UpdateProduct'
import OrderList from '../pages/admin/orderList/OrderList'
import UpdateOrder from '../pages/admin/updateOrder/UpdateOrder'
import UsersList from '../pages/admin/usersList/UsersList'
import UpdateUser from '../pages/admin/updateUser/UpdateUser'
import Reviews from '../pages/admin/reviews/Reviews'

const PageRoutes = () => {

    const [stripeApiKey,setStripeApiKey] = useState("")
    const dispatch = useDispatch();
    const getStripeApiKey = async ()=>{
      const {data} = await axios.get('/api/v1/stripeApiKey')
      setStripeApiKey(data.stripeApiKey)
    }

    useEffect(() => {
      dispatch(loadUser());
      getStripeApiKey()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product/:catagory/:id' element={<ProductDetails/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route path='/products/:keyword' element={<Products/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path={`/${ROUTE_CONSTANTS.AUTH}`} element={<Auth/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='forgotpassword' element={<ForgotPassword/>}/>
            <Route path='resetpassword/:token' element={<ResetPassword/>}/>
        </Route>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute/>}>
          <Route exact path={`/${ROUTE_CONSTANTS.ACCOUNT}`} element={<Profile/>}>
            <Route exact path='updateProfile' element={<UpdateProfile/>}/>
            <Route exact path='changePassword' element={<UpdatePassword/>}/>
            <Route exact path='order' element={<Order/>}/>
          </Route>
          <Route exact path='shipping' element={<Shipping/>}/>
          <Route exact path='/success' element={<OrderSuccess/>}/>
          <Route exact path='/order/confirm' element={<ConfirmOrder/>}/>
          <Route exact path='/order/:id' element={<OrderDetails/>}/>
          <Route isAdmin={true} exact path='/admin' element={<Dashboard/>}>
            <Route exact path='dashboard' element={<DashboardComp/>}/>
            <Route exact path='allproducts' element={<ProductList/>}/>
            <Route exact path='createproduct' element={<CreateProduct/>}/>
            <Route exact path='updateproduct/:id' element={<UpdateProduct/>}/>
            <Route exact path='allorders' element={<OrderList/>}/>
            <Route exact path='updateorder/:id' element={<UpdateOrder/>}/>
            <Route exact path='allusers' element={<UsersList/>}/>
            <Route exact path='updateuser/:id' element={<UpdateUser/>}/>
            <Route exact path='allreviews' element={<Reviews/>}/>
          </Route>
        </Route>
        <Route path='/process/payment' element={
          (stripeApiKey !=='' || stripeApiKey!==undefined)  && (<Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute>
              <Payment/>
          </ProtectedRoute>
        </Elements>)
        }/>
        <Route path='*' element={<NotFound404/>}/>
    </Routes>
  )
}

export default PageRoutes
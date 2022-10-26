import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import ProductDetails from '../pages/productDetails/ProductDetails'
import Products from '../pages/products/Products'
import Profile from '../pages/profile/Profile'
import {ROUTE_CONSTANTS} from '../constants/constants'
// import { useSelector } from 'react-redux'
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute'
import UpdateProfile from '../components/profileUpdate/ProfileUpdate'
import UpdatePassword from '../pages/profile/changePassword/PasswordUpdate'
import ResetPassword from '../pages/profile/resetPassword/ResetPassword'
import Login from '../components/authentication/login/Login'
import Register from '../components/authentication/register/Register'
import ForgotPassword from '../pages/profile/forgotPassword/ForgotPassword'

const PageRoutes = () => {
    // const {user,isAuthenticate,loading} = useSelector(state=>state.user)

  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product/:catagory/:id' element={<ProductDetails/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route path='/products/:keyword' element={<Products/>}/>
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
          </Route>
        </Route>
        <Route path='*' element={<h1>404 not found</h1>}/>
    </Routes>
  )
}

export default PageRoutes
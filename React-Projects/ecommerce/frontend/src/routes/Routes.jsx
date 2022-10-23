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
import ProfileUpdate from '../components/profileUpdate/ProfileUpdate'

const PageRoutes = () => {
    // const {user,isAuthenticate,loading} = useSelector(state=>state.user)

  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product/:catagory/:id' element={<ProductDetails/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route path='/products/:keyword' element={<Products/>}/>
        <Route path='/auth/:authtype' element={<Auth/>}/>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute/>}>
          <Route exact path={`/${ROUTE_CONSTANTS.ACCOUNT}`} element={<Profile/>}>
            <Route path='updateProfile' element={<ProfileUpdate/>}/>
            <Route path='changePassword' element={<div>change password</div>}/>
          </Route>
        </Route>
        <Route path='*' element={<h1>404 not found</h1>}/>
    </Routes>
  )
}

export default PageRoutes
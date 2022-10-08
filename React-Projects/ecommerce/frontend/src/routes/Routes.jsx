import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import ProductDetails from '../pages/productDetails/ProductDetails'
import Products from '../pages/products/Products'

const PageRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product/:catagory/:id' element={<ProductDetails/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route path='/products/:keyword' element={<Products/>}/>
        <Route path='/auth/:authtype' element={<Auth/>}/>
        <Route path='*' element={<h1>404 not found</h1>}/>
    </Routes>
  )
}

export default PageRoutes
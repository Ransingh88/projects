import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import ProductDetails from '../pages/productDetails/ProductDetails'

const PageRoutes = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product/:catagory/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default PageRoutes
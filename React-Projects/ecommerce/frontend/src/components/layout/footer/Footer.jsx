import React from 'react'
import { Link } from 'react-router-dom'
import {IoCallOutline, IoMailOutline, IoLocationOutline, IoHeartSharp} from 'react-icons/io5'
import './footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid mainFooterContainer'>
      <div className='container footerContainer'>
      <div className='row'>
        <div className='col-12 col-md-3 col-sm-6 shopInfo'>
            <Link to="/">{true ? <img src="/images/logo/ecoshop-black.png" alt="ecoshop-logo" /> : <img src="/images/logo/ecoshop-white.png" alt="ecoshop-logo" />}</Link>
            <p><IoLocationOutline/> street no 267A, Bangalore,MD-74,IND</p>
            <p><IoCallOutline/> +917789542331</p>
            <p><IoMailOutline/> info@ecoshop.com</p>
        </div>
        <div className='col-12 col-md-3 col-sm-6 siteMap'>
          <h4>Helpful Links</h4>
          <Link to="/to">products</Link>
          <Link to="/to">find a store</Link>
          <Link to="/to">features</Link>
          <Link to="/to">privacy policy</Link>
          <Link to="/to">blog</Link>
        </div>
        <div className='col-12 col-md-3 col-sm-6 siteMap'>
        <h4>shop</h4>
          <Link to="/to">About Us</Link>
          <Link to="/to">Career</Link>
          <Link to="/to">Shipping Method</Link>
          <Link to="/to">Contact</Link>
          <Link to="/to">Blog</Link>
        </div>
        <div className='col-12 col-md-3 col-sm-6 siteMap'>
        <h4>my account</h4>
          <Link to="/to">Login</Link>
          <Link to="/to">My Account</Link>
          <Link to="/to">My Cart</Link>
          <Link to="/to">Wishlist</Link>
          <Link to="/to">Checkout</Link>
        </div>
        <div className='col-12 copyright'>copyright &copy; 2022  ecoshop All right  reserved <br /> Designed & Developed by <IoHeartSharp/> <b>D. Ransingh</b></div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
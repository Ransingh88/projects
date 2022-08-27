import React from 'react'
import HomeCarousel from './carousel/HomeCarousel'
import ExclusiveProducts from './exclusiveProducts/ExclusiveProducts'
import './home.css'


const Home = () => {
  return (
    <main className='container-fluid mainHomeContainer'>
        <HomeCarousel />
        <div className='container homeContainer'>
          <ExclusiveProducts />
          
        </div>
    </main>
  )
}

export default Home
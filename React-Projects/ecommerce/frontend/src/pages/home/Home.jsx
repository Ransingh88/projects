import React from 'react'
import MetaData from '../../components/layout/metaData/MetaData'
import HomeCarousel from './carousel/HomeCarousel'
import ExclusiveProducts from './exclusiveProducts/ExclusiveProducts'
import './home.css'


const Home = () => {
  return (
    <main className='container-fluid mainHomeContainer'>
      <MetaData title="ecoshop"/>
        <HomeCarousel />
        <div className='container homeContainer'>
          <ExclusiveProducts />
          
        </div>
    </main>
  )
}

export default Home
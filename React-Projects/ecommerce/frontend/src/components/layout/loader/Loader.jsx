import React from 'react'
import './loader.css'

const Loader = () => {
  // document.body.classList.add('no-scroll');
  return (
    <div className='loader'>
      <div className='loaderWrapper'>
      </div>
        <img className='loaderImage' src="./images/logo/shopping-bagicon.png" alt="loader logo" />
    </div>
  )
}

export default Loader
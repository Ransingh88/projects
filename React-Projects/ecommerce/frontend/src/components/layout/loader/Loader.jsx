import React from 'react'
import './loader.css'
import LoaderIcon from '../../../Assets/image/logo/shopping_bagicon.png'

const Loader = () => {
  // document.body.classList.add('no-scroll');
  return (
    <div className='loader'>
      <div className='loaderWrapper'>
      </div>
        <img className='loaderImage' src={LoaderIcon} alt="loader logo" />
    </div>
  )
}

export default Loader
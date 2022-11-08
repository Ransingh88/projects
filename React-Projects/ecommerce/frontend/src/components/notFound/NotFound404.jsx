import React from 'react'
import { Link } from 'react-router-dom'
import './notFound404.css'

const NotFound404 = () => {
  return (
    <main className='container-fluid main404Container'>
        <section className='container container404'>
        <h1 className='pageNotFound_404'>404</h1>
        <p className='pageNotFound_notFound'>Not Found</p>
        <p className='pageNotFound_quote'>The page you are looking for doesn't exist or an another error occured.</p>
        <p className='pageNotFound_quote'>Go back, or head over to <span><b><Link to="/">ecoshop.com</Link></b></span> to choose a new direction.</p>
    </section>
    </main>
  )
}

export default NotFound404
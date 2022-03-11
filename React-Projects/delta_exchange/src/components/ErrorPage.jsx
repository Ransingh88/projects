import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div>ErrorPage</div>
    <p><Link to="/login">back to home</Link></p>
    </>
  )
}

export default ErrorPage
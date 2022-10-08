import React from 'react'
import './auth.css'
import { Link, useParams } from 'react-router-dom'

import Login from '../../components/authentication/login/Login'
import Register from '../../components/authentication/register/Register'
import MetaData from '../../components/layout/metaData/MetaData'



const Auth = () => {
    const {authtype} = useParams()
  return (
    <>
    <MetaData title={`authentication - ${authtype}`}/>
    <main className='container-fluid mainAuthContainer'>
        <div className="container authContainer">
            <div className='authGraficSection'></div>
            <div className='authFormSection'>
            <div className='authTab'>
                <Link className={`loginTab ${authtype==='login'? 'active' : ''}`} to='/auth/login'><div ><span>login</span> </div></Link>
                <Link className={`registerTab ${authtype==='register'? 'active' : ''}`} to='/auth/register'><div><span>register</span></div></Link>
            </div>
            {
                authtype === 'login'?
                <section className="login-section">
                    <Login/> 
                </section> : authtype === 'register' ?
                <section className="register-section">
                    <Register/>
                </section> : ''
            }
            </div>
        </div>
    </main>
    </>
  )
}

export default Auth
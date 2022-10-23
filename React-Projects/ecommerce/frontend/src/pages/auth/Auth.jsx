import React from 'react'
import './auth.css'
import {useParams } from 'react-router-dom'

import loginBgImage from '../../Assets/image/shopping-login.jpeg'
import registerBgImage from '../../Assets/image/shopping-register.jpg'
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
            <div className='authGraficSection'>
                {
                    authtype==='login' ?
                    <img src={loginBgImage} alt="shopping bg" /> :
                    <img src={registerBgImage} alt="shopping bg" />
                }
            </div>
            <div className='authFormSection'>
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
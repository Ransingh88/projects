import React from 'react'
import './auth.css'
import {Outlet, useLocation } from 'react-router-dom'

import loginBgImage from '../../Assets/image/shopping-login.jpeg'
import registerBgImage from '../../Assets/image/shopping-register.jpg'



const Auth = () => {
    const {pathname} = useLocation()
  return (
    <>
    <main className='container-fluid mainAuthContainer'>
        <div className="container authContainer">
            <div className='authGraficSection'>
                {
                    pathname ===`/auth/login` ?
                    <img src={loginBgImage} alt="shopping bg" /> :
                    <img src={registerBgImage} alt="shopping bg" />
                }
            </div>
            <div className='authFormSection'>
            {/* {
                authtype === 'login'?
                <section className="login-section">
                    <Login/> 
                </section> : authtype === 'register' ?
                <section className="register-section">
                    <Register/>
                </section> : authtype === 'forgotpassword' ?
                <section className="register-section">
                    <ForgotPassword/>
                </section> : authtype === 'resetpassword' ?
                <section className="register-section">
                    <ResetPassword/>
                </section> :''
            } */}
            <section className="login-section">
            <Outlet/>
            </section>
            </div>
        </div>
    </main>
    </>
  )
}

export default Auth
import React, { useEffect, useState } from 'react'
import './login.css'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { clearError, login } from '../../../redux/features/user/userThunks'
import {ROUTE_CONSTANTS} from '../../../constants/constants'
import Loader from '../../layout/loader/Loader'
import googleIcon from '../../../Assets/image/icons/google.png'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading,user,isAuthenticate,error} = useSelector(state=>state.user)

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearError())
        }

        if(isAuthenticate){
            // toast.success('user login successfully')
            navigate(ROUTE_CONSTANTS.ACCOUNT)
        }
    },[dispatch,error,isAuthenticate,navigate])

    // useEffect(()=>{
    //     if(isAuthenticate){
    //         toast.success('login success')
    //     }
    // },[isAuthenticate])

    const handleLogin = ()=>{
        dispatch(login(email,password))
    }
  return (
    <>{
        loading ? <Loader/> :
    <>
    <div className='login_heading'>
        <h2>Sign in</h2>
        <p>Don't have an account yet? <Link to='/auth/register'>Signup here</Link></p>
    </div>
    <button className='btn btn-loginGoogle'> <img src={googleIcon} alt="" /> Sign in with google</button>
    <div className='login-separator'>
        <div></div>
        <p>OR</p>
        <div></div>
    </div>
    <form className='login-form'>
        <input className='login-input' type="email" required placeholder='Enter Email' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input className='login-input' type="password" required placeholder='Enter Password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <p className='login-forgotPassword'><Link to="/auth/forgotpassword">Forgot Password?</Link></p>
    </form>
    <div className='auth-action_btn'>
        <button className='btn btn-primary btn-login_register' onClick={handleLogin} >sign in</button>
    </div>
    </>
    }</>
  )
}

export default Login
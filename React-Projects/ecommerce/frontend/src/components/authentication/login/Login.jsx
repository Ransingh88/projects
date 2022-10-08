import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { clearError, login } from '../../../redux/features/user/userThunks'
import Button from '../../button/Button'
import Loader from '../../layout/loader/Loader'
import './login.css'

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
            navigate('/account')
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
    <form className='login-form'>
        <input type="email" required placeholder='Enter Email' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" required placeholder='Enter Password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <p className='login-forgotPassword'><Link to="/auth/forgotpassword">Forgot Password?</Link></p>
    </form>
    <div>
        <Button title="Login" className="btn-filter" onclick={handleLogin}/>
    </div>
    </>
    }</>
  )
}

export default Login
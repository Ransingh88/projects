import React, { useEffect, useState } from 'react'
import './register.css'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

import { clearError, register } from '../../../redux/features/user/userThunks'
import {ROUTE_CONSTANTS} from '../../../constants/constants'
import Loader from '../../layout/loader/Loader'
import profileIcon from '../../../Assets/image/icons/user.png'

const Register = () => {

    const [avatar,setAvatar] = useState('')
    const [avatarPreview,setAvatarPreview] = useState(profileIcon)
    const [userFormData,setUserFormData] =useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading,error,isAuthenticate} = useSelector(state=>state.user)

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearError())
        }

        if(isAuthenticate){
            
            navigate(ROUTE_CONSTANTS.ACCOUNT)
        }
    },[dispatch,error,isAuthenticate,navigate])

    // useEffect(()=>{
    //     if(isAuthenticate){
    //         toast.success('login success')
    //     }
    // },[isAuthenticate])

    const handleUserFormData = (e)=>{
        if(e.target.name === 'avatar'){
            const reader = new FileReader()

            reader.onload = ()=>{
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])

        }else{
            setUserFormData({...userFormData,[e.target.name]:e.target.value})
        }
    }

    const handleRegister =()=>{
        const myForm = new FormData()

        myForm.set("name",userFormData.name)
        myForm.set("email",userFormData.email)
        myForm.set("password",userFormData.password)
        myForm.set("avatar",avatar)

        dispatch(register(myForm))
    }
    
  return (
    <>{
        loading ? <Loader/> :
    <>
    <div className='login_heading'>
        <h2>Sign up</h2>
        <p>Already have an account? <Link to='/auth/login'>Signin here</Link></p>
    </div>
    <form
        className='register-form'
        encType='multipart/form-data'
    >
        <input type="text" required placeholder='Name' name="name" value={userFormData.name} onChange={handleUserFormData}/>
        <input type="email" required placeholder='Email' name="email" value={userFormData.email} onChange={handleUserFormData}/>
        <div className='register-password'>
        <input type="password" required placeholder='Password' name="password" value={userFormData.password} onChange={handleUserFormData}/>
        <input type="password" required placeholder='Confirm Password' name="confirmpassword" value={userFormData.confirmpassword} onChange={handleUserFormData}/>
        </div>
        <div className='profileAvatar'>
        <img src={avatarPreview} alt="avatar preview"/>
        <input type="file"  name="avatar" accept='image/*' onChange={handleUserFormData}/>
        </div>
    </form>
    <div className='auth-action_btn'>
        {/* <Button title="Register" className="btn-filter" onclick={handleRegister}/> */}
        <button className='btn btn-primary btn-login_register' onClick={handleRegister} >sign Up</button>
    </div>
    </>
    }</>
  )
}

export default Register
import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '../../button/Button'
import './register.css'
import profileIcon from '../../../Assets/image/icons/user.png'
import { clearError, register } from '../../../redux/features/user/userThunks'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../layout/loader/Loader'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

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
            
            navigate('/account')
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
                if(reader.readyState === '2'){
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
    <form>
        <input type="text" required placeholder='Name' name="name" value={userFormData.name} onChange={handleUserFormData}/>
        <input type="email" required placeholder='Email' name="email" value={userFormData.email} onChange={handleUserFormData}/>
        <input type="password" required placeholder='Password' name="password" value={userFormData.password} onChange={handleUserFormData}/>
        <input type="password" required placeholder='Confirm Password' name="confirmpassword" value={userFormData.confirmpassword} onChange={handleUserFormData}/>
        <div className='profileAvatar'>
        <img src={avatarPreview} alt="avatar preview" />
        <input type="file"  name="avatar" accept='image/*' onChange={handleUserFormData}/>
        </div>
    </form>
    <div>
        <Button title="Register" className="btn-filter" onclick={handleRegister}/>
    </div>
    </>
    }</>
  )
}

export default Register
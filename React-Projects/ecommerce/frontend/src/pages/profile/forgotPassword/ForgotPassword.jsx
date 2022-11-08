import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../../../components/layout/loader/Loader'
import {forgotPassword} from '../../../redux/features/user/profileThunk'

import MetaData from '../../../components/layout/metaData/MetaData'
import { toast } from 'react-toastify'
import { clearErrors } from '../../../redux/features/user/forgotPasswordSlice'

const ForgotPassword = () => {

    const [email,setEmail] = useState('')
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const {error,loading, message} = useSelector(state=>state.forgotPassword)

    const handleForgotPassword = ()=>{
        const myForm = new FormData()

    myForm.set("email",email)

    dispatch(forgotPassword(myForm))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
    
        if(message){
            toast.success(message)
            // navigate(`${ROUTE_CONSTANTS.AUTH}${ROUTE_CONSTANTS.LOGIN}`)

        }
    },[dispatch,error,message])

  return (
  <>{loading ? <Loader /> :
  <>
  <MetaData title="forgot - password" />
  <div className='login_heading'>
        <h2>Forgot Password</h2>
        <p>Already have an account? <Link to='/auth/login'>Signin here</Link></p>
    </div>
    <form
        className='register-form'
    >
        <input type="email" required placeholder='Email' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </form>
    <div className='auth-action_btn'>
        <button className='btn btn-primary btn-login_register' onClick={handleForgotPassword} >send email</button>
    </div>
              </>
              }</>
  )
}

export default ForgotPassword
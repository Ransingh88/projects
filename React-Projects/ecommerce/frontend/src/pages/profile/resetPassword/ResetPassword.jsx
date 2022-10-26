import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../components/layout/loader/Loader'
import {resetPassword} from '../../../redux/features/user/profileThunk'
import MetaData from '../../../components/layout/metaData/MetaData'
import { toast } from 'react-toastify'
import { clearErrors } from '../../../redux/features/user/forgotPasswordSlice'
import { ROUTE_CONSTANTS } from '../../../constants/constants'

const ResetPassword = () => {

    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const {error,loading, success} = useSelector(state=>state.forgotPassword)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useParams()

    const handleResetPassword = ()=>{
        const myForm = new FormData()

        myForm.set("password",newPassword)
        myForm.set("confirmPassword",confirmPassword)

        dispatch(resetPassword(token,myForm))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
    
        if(success){
            toast.success('Password reset successfully')
            navigate(`${ROUTE_CONSTANTS.AUTH}${ROUTE_CONSTANTS.LOGIN}`)
        }
    },[dispatch,error,success,navigate])

  return (
  <>{loading ? <Loader /> :
  <>
  <MetaData title="forgot - password" />
  <div className='login_heading'>
        <h2>Reset Password</h2>
        <p>Already have an account? <Link to='/auth/login'>Signin here</Link></p>
    </div>
    <form
        className='register-form'
    >
        <input type="password" required placeholder='new password' name="email" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}/>
        <input type="password" required placeholder='confirm password' name="email" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
    </form>
    <div className='auth-action_btn'>
        <button className='btn btn-primary btn-login_register' onClick={handleResetPassword} >Reset</button>
    </div>
              </>
              }</>
  )
}

export default ResetPassword
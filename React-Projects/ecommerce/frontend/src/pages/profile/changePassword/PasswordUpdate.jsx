import React, { useEffect,useState } from 'react'
import './passwordUpdate.css'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


import MetaData from '../../../components/layout/metaData/MetaData'
import { clearError, updatePassword } from '../../../redux/features/user/profileThunk'
import Loader from '../../../components/layout/loader/Loader'
import { loadUser } from '../../../redux/features/user/userThunks'
import { ROUTE_CONSTANTS } from '../../../constants/constants'
import { updatePasswordReset } from '../../../redux/features/user/profileSlice'

const PasswordUpdate = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [oldPassword,setOldPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const {error,isUpdated,loading} = useSelector(state=>state.profile)


  const handlePasswordUpdate =()=>{
    const myForm = new FormData()

    myForm.set("oldPassword",oldPassword)
    myForm.set("newPassword",newPassword)
    myForm.set("confirmPassword",confirmPassword)

    dispatch(updatePassword(myForm))
}



useEffect(()=>{
    if(error){
        toast.error(error)
        dispatch(clearError())
    }

    if(isUpdated){
        toast.success('Password Update Successfully')
        dispatch(loadUser())
        navigate(ROUTE_CONSTANTS.ACCOUNT)
        dispatch(updatePasswordReset())
    }
},[dispatch,error,navigate,isUpdated])


  return (
  <>{loading ? <Loader/> :
  <>
  <MetaData title="update - password" />
              <div className='accountContainer_heading'>
                      <h2>Update Password</h2>
                      <div>
                      <button className='btn btn-profileEdit btn-primary' onClick={handlePasswordUpdate}>Update</button>
                      <button className='btn btn-profileEdit btn-primary' onClick={()=>{navigate('/account')}}>Cancel</button>
                      </div>
              </div>
              <div className='updatePassword_container'>
                <input type="text" placeholder='Old Password' value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}}/>
                <input type="text" placeholder='New Password'value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}/>
                <input type="text" placeholder='New Confirm Password'value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
              </div>
              </>
              }</>
  )
}

export default PasswordUpdate
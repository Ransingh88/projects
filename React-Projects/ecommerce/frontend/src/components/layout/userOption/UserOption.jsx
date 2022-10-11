import React from 'react'
import { IoBagOutline, IoGridOutline, IoLogOutOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logout } from '../../../redux/features/user/userThunks'
import './userOption.css'

const UserOption = ({user}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/')
        toast.success('Logout successful')
    }
  return (
    <div className='userOption'>
        <div className='useOpt-info'>
            <h4>Welcome!</h4>
            <h5>{user.name}</h5>
        </div>
        <div className='userOpt-menus'>
        <p onClick={()=>{navigate('/account')}}><IoPersonCircleOutline/>Profile</p>
        {
            user.role === 'admin' && 
            <p onClick={()=>{navigate('/dashboard')}}><IoGridOutline/>Dashboard</p>
        }
        <p onClick={()=>{navigate('/order')}}><IoBagOutline/>Order</p>
        <p onClick={handleLogout}><IoLogOutOutline/>Logout</p>
        </div>
    </div>
  )
}

export default UserOption
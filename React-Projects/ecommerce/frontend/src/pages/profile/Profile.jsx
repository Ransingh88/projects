import React, { useEffect } from 'react'
import './profile.css'

import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { IoBagOutline, IoLogOutOutline, IoPersonCircleOutline, IoHomeOutline, IoLockOpenOutline } from 'react-icons/io5'

import Loader from '../../components/layout/loader/Loader'
import MetaData from '../../components/layout/metaData/MetaData'
import { logout } from '../../redux/features/user/userThunks'
import { toast } from 'react-toastify'

const Profile = () => {

    const {user,isAuthenticate,loading} = useSelector(state=>state.user)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const userFistName = user?.name?.split(' ')

    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/')
        toast.success('Logout successful')
    }

    useEffect(()=>{
        if(isAuthenticate === false){
            navigate('/auth/login')
        }
    },[isAuthenticate,navigate])

  return (
    <>
    {loading ? <Loader/> :
    <>
    <MetaData title={`myprofile - ${user.name}`}/>
        <main className='container-fluid mainProfileContainer'>
        <div className='container profileContainer'>
            <section className='account_sidebar'>
                <div className='account-userIdentity'>
                    <img src={user?.avatar?.url} alt="" />
                    <div className='account-userGreet'>
                        <p>Welcome back,</p>
                        <h4>{user?.name ? userFistName[0] : ''}</h4>
                    </div>
                </div>
                <ul className='account-sidebar_menus'>
                    <li> <IoHomeOutline/> Home</li>
                    <Link to="/account"><li> <IoPersonCircleOutline/> Profile</li></Link>
                    <li> <IoBagOutline/> Order</li>
                    <Link to="/account/changePassword"><li> <IoLockOpenOutline/> Change Password</li></Link>
                    <li onClick={handleLogout}> <IoLogOutOutline/> Logout</li>
                </ul>
            </section>
            <section className='account_accountContainer'>
                {location.pathname === '/account' ? 
            <>
                <div className='accountContainer_heading'>
                        <h2>Account Setting</h2>
                        <button className='btn btn-profileEdit btn-primary' onClick={()=>{navigate('/account/updateProfile')}}>Edit</button>
                    </div>
                <div className='accountContainer_userDetails'>
                <div className='userDetails_profilePicture'>
                        <h5>Profile Photo</h5>
                                <img src={user?.avatar?.url} alt="" />
                    </div>
                    <div className='userDetails_info'>
                        <div>
                            <h5>Full Name</h5>
                                <p>{user.name}</p>
                        </div>
                        <div>
                            <h5>Email address</h5>
                                <p>{user.email}</p>
                        </div>
                        <div>
                            <h5>ID</h5>
                            <p>{user._id}</p>
                        </div>
                        <div>
                            <h5>Role</h5>
                            <p>{user.role}</p>
                        </div>
                        <div>
                            <h5>Joined on</h5>
                            <p>{user?.createdAt?.substr(0,10)}</p>
                        </div>
                        <div>
                            <h5>Last Modified on</h5>
                            <p>{user?.updatedAt?.substr(0,10)}</p>
                        </div>
                    </div>
                </div>
                </> : <Outlet/> }
            </section>
        </div>
    </main> 
    </>
    }</>
  )
}

export default Profile
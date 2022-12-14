import React from 'react'
import { IoAddCircleOutline, IoBagHandleOutline, IoGridOutline,IoLogOutOutline, IoHomeOutline, IoListOutline, IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineRateReview } from 'react-icons/md'
import { useSelector,useDispatch } from 'react-redux'
import { Link, Navigate, Outlet, useLocation,useNavigate } from 'react-router-dom'
import MetaData from '../../components/layout/metaData/MetaData'
import './dashboard.css'
import { toast } from 'react-toastify'

import {logout } from '../../redux/features/user/userThunks'

const Dashboard = () => {

    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector(state=>state.user)
    const userFistName = user?.name?.split(' ')

    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/')
        toast.success('Logout successful')
    }

    if(pathname === '/admin'){
        return <Navigate to='/admin/dashboard'/>
    }
  return (
    <>
    <MetaData title={`myprofile - ${user.name}`}/>
        <main className='container-fluid mainDashboardContainer'>
        <div className='container dashboardContainer'>
            <section className='dashboard_sidebar'>
                <div className='dashboard-userIdentity'>
                    <img src={user?.avatar?.url} alt="" />
                    <div className='dashboard-userGreet'>
                        <p>Welcome back,</p>
                        <h4>{user?.name ? userFistName[0] : ''}(Admin)</h4>
                    </div>
                </div>
                <ul className='dashboard-sidebar_menus'>
                    <Link to="/"><li> <IoHomeOutline/> Home</li></Link>
                    <Link to="/admin/dashboard"><li> <IoGridOutline/> Dashboard</li></Link>
                    <Link to="/admin/allproducts"><li> <IoBagHandleOutline/> All Products</li></Link>
                    <Link to="/admin/createproduct"><li> <IoAddCircleOutline/> Create Product</li></Link>
                    <Link to="/admin/allorders"><li> <IoListOutline/> Orders</li></Link>
                    <Link to="/admin/allusers"><li> <IoPeopleOutline/> Users</li></Link>
                    <Link to="/admin/allreviews"><li> <MdOutlineRateReview/> Reviews</li></Link>
                    <li onClick={handleLogout}> <IoLogOutOutline /> Logout</li>
                </ul>
            </section>
            <section className='dashboard_dashboardContainer'>
                <Outlet/>
            </section>
        </div>
    </main> 
    </>
  )
}

export default Dashboard
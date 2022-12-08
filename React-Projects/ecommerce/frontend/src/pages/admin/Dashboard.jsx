import React from 'react'
import { IoAddCircleOutline, IoBagHandleOutline, IoGridOutline, IoHomeOutline, IoListOutline, IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineRateReview } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import MetaData from '../../components/layout/metaData/MetaData'
import './dashboard.css'

const Dashboard = () => {

    const {user,isAuthenticate,loading} = useSelector(state=>state.user)
    const userFistName = user?.name?.split(' ')
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
                    <Link to="/admin/createproduct"><li> <IoListOutline/> Orders</li></Link>
                    <Link to="/admin/createproduct"><li> <IoPeopleOutline/> Users</li></Link>
                    <Link to="/admin/createproduct"><li> <MdOutlineRateReview/> Reviews</li></Link>
                    {/* <li onClick={handleLogout}> <IoLogOutOutline/> Logout</li> */}
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
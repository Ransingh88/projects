import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from '../layout/loader/Loader'

const ProtectedRoute = ({isAdmin, children}) => {

  const {isAuthenticate,loading, user} = useSelector(state=>state.user)

    if(isAuthenticate === false){
      return <Navigate to="/auth/login"/>
    }
    if(isAdmin === true && user.role !== 'admin'){
      return <Navigate to="/auth/login"/>
    }
    // useEffect(()=>{
    //   if(isAuthenticate === false){
    //    <Navigate to="/auth/login"/>
    // }
    // },[isAuthenticate])

  return (
    <>
    { loading ? <Loader/> : 
    loading  === false && (children  ? children : <Outlet/>)}
    </>
  )
}

export default ProtectedRoute
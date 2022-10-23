import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from '../layout/loader/Loader'

const ProtectedRoute = ({children}) => {

  const {isAuthenticate,loading} = useSelector(state=>state.user)

    // if(!isAuthenticate){
    //   return <Navigate to="/auth/login"/>
    // }
    useEffect(()=>{
      if(!isAuthenticate){
       <Navigate to="/auth/login"/>
    }
    },[isAuthenticate])

  return (
    <>
    { loading ? <Loader/> : 
    !loading && (children  ? children : <Outlet/>)}
    </>
  )
}

export default ProtectedRoute
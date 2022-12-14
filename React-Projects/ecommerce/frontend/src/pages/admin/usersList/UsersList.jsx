import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import {toast} from 'react-toastify'
import { deleteAdminUser, fetchAdminUsers } from '../../../redux/features/user/adminUsers/adminUsersThunks';
import {clearErrors, deleteAdminUserReset} from '../../../redux/features/user/adminUsers/adminUsersSlice'
import Loader from '../../../components/layout/loader/Loader'

const UsersList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {users, error, loading, isDeleted, message} = useSelector(state => state.adminUser)

    const handleUserDelete = (id) =>{
      dispatch(deleteAdminUser(id))
    }

    useEffect(()=>{
        if(error){
            toast.error(error)
            dispatch(clearErrors())
        }
        if(isDeleted){
            // toast.success(message)
            dispatch(deleteAdminUserReset())
        }
        dispatch(fetchAdminUsers())
    },[dispatch, error, isDeleted, message])

  return (
    <>
    {loading ? <Loader /> : 
    
    <div className='productList_container'>
        <h1 className='dashboard_heading'><span>All Users</span></h1>
        <div>
        <table className='dashboard_table'>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {
            users && users.map((item)=>(
                <tr>
          <td>{item._id} </td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.role}</td>
          <td><button onClick={()=>{navigate(`/admin/updateuser/${item._id}`)}} className='tableActionBtn editActionBtn'><IoCreateOutline/></button><button className='tableActionBtn deleteActionBtn' onClick={()=>handleUserDelete(item._id)}><IoTrashOutline /></button></td>
        </tr>
            ))
        }
        
      </table>
        </div>
    </div>
    }</>
  )
}

export default UsersList
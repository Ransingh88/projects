import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import loginBgImage from '../../../Assets/image/shopping-login.jpeg'
import { fetchAdminUserDetails, updateAdminUser } from '../../../redux/features/user/adminUsers/adminUsersThunks'
import { clearErrors, updateAdminUserReset } from '../../../redux/features/user/adminUsers/adminUsersSlice'

const UpdateUser = () => {


const dispatch = useDispatch()
const navigate = useNavigate()
const {id} = useParams()
const {user,loading,error,isUpdated} = useSelector(state=>state.adminUser)

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [role,setRole] = useState('')


const handleUpdateUser = () => {
  const myForm = new FormData()

        myForm.set("name",name)
        myForm.set("email",email)
        myForm.set("role",role)

        dispatch(updateAdminUser(id,myForm))
}


useEffect(()=>{

    if(user && user._id !== id){
        dispatch(fetchAdminUserDetails(id))
    }else{
        setName(user.name)
        setEmail(user.email)
        setRole(user.role)
    }

  if(error){
      toast.error(error)
      dispatch(clearErrors())
  }
  if(isUpdated){
    //   toast.success(message)
      dispatch(updateAdminUserReset())
      navigate('/admin/allusers')
  }
},[dispatch, error, id, isUpdated, navigate, user])

  return (
    <>
    <div>
       
    </div>
    <main className='container-fluid mainNewProductContainer'>
    <div className="container newProductContainer">
        <div className='newProductGraficSection'>
            
        <img src={loginBgImage} alt="shopping bg" />
            
        </div>
        <div className='newProductFormSection'>
        <section className="newProduct-section">
        <div>
          <h1 className='dashboard_heading'><span>Update User</span></h1>
       <div>
        <div>
          <p>Name</p>
          <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
        <p>Role</p>
          <select name="" id="" value={role} onChange={(e)=>setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          </select>
        </div>
        <button disabled={loading ? true : false} className='btn btn-primary btn-create' onClick={handleUpdateUser}>Update</button>
       </div>
    </div>
        </section>
        </div>
    </div>
</main>
</>
  )
}

export default UpdateUser
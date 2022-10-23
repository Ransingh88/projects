import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ROUTE_CONSTANTS } from '../../constants/constants'
import { updateProfileReset } from '../../redux/features/user/profileSlice'
import { clearError, updateProfile } from '../../redux/features/user/profileThunk'
import { loadUser } from '../../redux/features/user/userThunks'
import Loader from '../layout/loader/Loader'
import Metadata from '../layout/metaData/MetaData'

const ProfileUpdate = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [avatar,setAvatar] = useState('')
    const [avatarPreview,setAvatarPreview] = useState('')

    const {user} = useSelector(state=>state.user)
    const {error,isUpdated,loading} = useSelector(state=>state.profile)

    const handleUserFormData = (e)=>{
        
            const reader = new FileReader()

            reader.onload = ()=>{
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])

    }

    const handleUpdate =()=>{
        const myForm = new FormData()

        myForm.set("name",name)
        myForm.set("email",email)
        myForm.set("avatar",avatar)

        dispatch(updateProfile(myForm))
    }


    useEffect(()=>{
        if(user){
            setName(user.name)
            setEmail(user.email)
            setAvatarPreview(user?.avatar?.url)
        }
        if(error){
            toast.error(error)
            dispatch(clearError())
        }

        if(isUpdated){
            toast.success('Profile Update Successfully')
            dispatch(loadUser())
            navigate(ROUTE_CONSTANTS.ACCOUNT)
            dispatch(updateProfileReset())
        }
    },[dispatch,error,navigate,user,isUpdated])

    // useEffect(()=>{
    //     if(isAuthenticate === false){
    //         navigate('/auth/login')
    //     }
    //     if(user){
    //         setName(user.name)
    //         setEmail(user.email)
    //         setAvatar(user?.avatar?.url)
    //     }
    // },[isAuthenticate,navigate,user])
  return (
    <>{loading ? <Loader/> : 
    <>
    <Metadata title="update - profile" />
                <div className='accountContainer_heading'>
                        <h2>Account Update</h2>
                        <button className='btn btn-profileEdit btn-primary' onClick={handleUpdate}>Update</button>
                    </div>
                <div className='accountContainer_userDetails'>
                <div className='userDetails_profilePicture'>
                        <h5>Profile Photo</h5>
                                <>
                                <img src={avatarPreview} alt="" />
                                <div className='profilePicFile'>
                                    <label htmlFor="file"> Choose a Photo</label>
                                    <input type="file" accept='image/*' id='file' onChange={handleUserFormData}/>
                                </div>
                                </>
                    </div>
                    <div className='userDetails_info'>
                        <div>
                            <h5>Full Name</h5>
                                <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}}/> 
                        </div>
                        <div>
                            <h5>Email address</h5>
                                <input type="email" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}}/> 
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
                </>
                }</>
  )
}

export default ProfileUpdate
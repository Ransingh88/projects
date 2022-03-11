import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {signup} from '../features/reducer/authSlice'

const Signin = () => {
  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch()

  let payload = {
    name,
    username,
    password
  }
  
  function handleSignup(){
    dispatch(signup(payload))
    if(localStorage.getItem('database') == null){

      localStorage.setItem('database',JSON.stringify([payload]))
    }else{
      let arr = JSON.parse(localStorage.getItem('database'))
      arr.push(payload)
      localStorage.setItem('database',JSON.stringify(arr))
    }

  }
  return (
    <div className='signin__container'>
      <div className="signin">
                    <h3 className='signin__heading'>Signup</h3>
                    <div className="login__form">
                    <div className='form__fields'>
                        <label htmlFor="">Name</label> <br />
                        <input type="text" placeholder='Enter Name...' name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className='form__fields'>
                        <label htmlFor="">Username</label> <br />
                        <input type="text" placeholder='Enter Username...' name="" id="" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className='form__fields'>
                        <label htmlFor="">Password</label> <br />
                        <input type="password" placeholder='Enter Password...' name="" id="" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        </div>
                        <div className="login__footer">
                            <button onClick={handleSignup} className="auth__btn">Signup</button>
                            </div>
                    </div>
    </div>
  )
}

export default Signin
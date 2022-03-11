import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../features/reducer/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  // const {isAuth} = useSelector((state)=> state.auth.value)

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  let payload = {
    username,
    password
  }

  function handleLogin(){
    dispatch(login(payload))
    // localStorage.setItem('userAuth',isAuth)
  }
  return (
    <div className='login_container'>

      <div className="login">
                    <h3 className='login__heading'>Login</h3>
                    <div className="login__form">
                        <div className='form__fields'>
                        <label htmlFor="">Username</label> <br />
                        <input type="text" placeholder='Enter Username...' name="" id="" onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className='form__fields'>
                        <label htmlFor="">Password</label> <br />
                        <input type="password" placeholder='Enter Password...' name="" id="" onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        </div>
                        <div className="login__footer">
                            <button onClick={handleLogin} className="auth__btn">Login</button>
                            </div>
                    </div>
    </div>
  )
}

export default Login
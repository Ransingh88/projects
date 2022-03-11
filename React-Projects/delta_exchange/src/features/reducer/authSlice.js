import {createSlice} from '@reduxjs/toolkit'

let isAuth = JSON.parse(localStorage.getItem('userAuth'))
var db = JSON.parse(localStorage.getItem('database'))
// console.log(db)
const initialState ={
    value: {
        isAuth,
        user:null
    }
        
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            db.forEach((ele)=> { if(ele.username === action.payload.username && ele.password === action.payload.password){
                    state.value.isAuth = true
                    state.value.user = ele
                    localStorage.setItem('userAuth',true)
                    localStorage.setItem('userDetails',JSON.stringify({name:ele.name}))
                    
                }
            })
        },
        logout:(state,action)=>{
            state.value.isAuth = false
            state.value.user = null
            localStorage.setItem('userAuth',false)
            localStorage.removeItem("teamdata");
            localStorage.removeItem("userAuth");
            localStorage.removeItem("userDetails");
        },
        signup:(state,action)=>{
            state.value.isAuth = true
            state.value.user = action.payload
            localStorage.setItem('userAuth',true)
            localStorage.setItem('userDetails',JSON.stringify({name:action.payload.name}))
        }
    }
})

export const {login, logout,signup} = authSlice.actions
export default authSlice.reducer
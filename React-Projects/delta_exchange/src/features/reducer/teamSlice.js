import {createSlice} from '@reduxjs/toolkit'
import dummydata from '../../data.json'
let data
if(localStorage.getItem('teamdata') == null){
    localStorage.setItem('teamdata',JSON.stringify(dummydata))
     data = JSON.parse(localStorage.getItem('teamdata'))
}else{
     data = JSON.parse(localStorage.getItem('teamdata'))
}

const initialState = {
    value:data
}

const teamSlice = createSlice({
    name:"team",
    initialState,
    reducers:{
        addmember:(state,action)=>{
            state.value.push(action.payload)
        },
        deletemember:(state,action)=>{
            state.value =  state.value.filter((e)=> e.id !== action.payload.id
            )
        }

    }
})

export const {addmember,deletemember}= teamSlice.actions
export default teamSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    employees:[]
}

export const employeeSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{
       addData:(state,action)=>{
            state.employees = action.payload
       },
       searchFilter:(state,action)=>{
        state.employees = action.payload.data
           state.employees = state.employees.filter((item)=>{
               return item.role.toLowerCase().includes(action.payload.searchData.toLowerCase()) || item.name.toLowerCase().includes(action.payload.searchData.toLowerCase()) || item.email.toLowerCase().includes(action.payload.searchData.toLowerCase())
           })
       },
       deleteFilter:(state,action)=>{
        state.employees = state.employees.filter((emp)=>{
            return emp.id !== action.payload
        })
    },
    deleteSelectedItem : (state,action)=>{

        if(action.payload.length > 0){
              action.payload.forEach((a)=>{
                state.employees = state.employees.filter((item)=>{
                    return item.id !== a
                })
            })
        }
    },
    updateData:(state,action)=>{
        state.employees = state.employees.map((ele)=>{
            return (ele.id === action.payload.id)? action.payload : ele
        }
        
        )
    }
    }
    
})

export const {addData,searchFilter,deleteFilter,deleteSelectedItem,updateData} = employeeSlice.actions
export default employeeSlice.reducer
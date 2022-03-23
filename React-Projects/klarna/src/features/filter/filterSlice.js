import {createSlice} from '@reduxjs/toolkit'
import data from '../../data.json'

const initialState = {
    value:data
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{

        caragory:(state,action)=>{
            if(action.payload === 'All'){
                state.value = data
            }else{
                state.value = data
                state.value = state.value.filter((item)=>{
                    return  item.catagory === action.payload
                })
            }
            
        },
        filterSearch:(state,action)=>{
                state.value = data
                if(action.payload.length >=1){

                    state.value = state.value.filter((item)=>{
                        return  item.title.toLowerCase().includes(action.payload.toLowerCase()) 
                    })
                }else{
                    state.value = data
                }
                
        },
        discount:(state,action)=>{
            state.value = data
            if(action.payload ==='0-49'){
                state.value = state.value.filter((item)=>{
                    return  item.discount < 50 
                })
            }
            else if(action.payload ==='50-80'){
                state.value = state.value.filter((item)=>{
                    return  item.discount < 80 && item.discount >= 50
                })
            }

        },
        filterType:(state,action)=>{
            state.value = data
            if(action.payload ==='Only Coupons'){
                state.value = state.value.filter((item)=>{
                    return  item.type.includes(action.payload) 
                })
            }
            else if(action.payload ==='Exclusives'){
                state.value = state.value.filter((item)=>{
                    return  item.type.includes(action.payload)
                })
            }
            else if(action.payload ==='BOGO and more'){
                state.value = state.value.filter((item)=>{
                    return  item.type.includes(action.payload)
                })
            }
        }

    }
})


export const {caragory,filterSearch,discount,filterType} = filterSlice.actions
export default filterSlice.reducer
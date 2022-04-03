import {configureStore} from '@reduxjs/toolkit'
import employeeReducer from './admin/employeeSlice'

export const store = configureStore({
    reducer:{
        employee : employeeReducer
    }
})
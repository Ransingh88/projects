import {createSlice} from '@reduxjs/toolkit'

const theme = localStorage.getItem('theme')

const initialState={
    theme:theme || 'light-theme'
}


export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        darkTheme:(state)=>{
            state.theme = 'dark-theme'
            localStorage.setItem('theme','dark-theme')
        },
        lightTheme:(state)=>{
            state.theme = 'light-theme'
            localStorage.setItem('theme','light-theme')
        }
    }
})

export const {darkTheme,lightTheme} = themeSlice.actions

export default themeSlice.reducer
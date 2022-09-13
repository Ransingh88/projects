import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkTheme, lightTheme } from '../../redux/features/theme/themeSlice'
import './theme.css'

const Theme = () => {
  const {theme} = useSelector((state)=>state.theme)
  const dispatch = useDispatch()

    useEffect(()=>{
        document.body.className = theme
    },[theme])

    const handleTheme = ()=>{
       if(theme === 'dark-theme'){
        dispatch(lightTheme())
        
       }else{
        dispatch(darkTheme())
       }
    }
    
  return (
    <>
    <div className='theme' onClick={handleTheme}>{theme==="light-theme" ? <img src='./icons/sun.png' alt='sun-icon' title='light-theme'/> : <img src='./icons/moon.png' alt='moon-icon' title='dark-theme'/>}</div>
    </>
  )
}

export default Theme
import React, { useEffect, useState } from 'react'
import './theme.css'

const Theme = () => {
    const [theme,setTheme] = useState('light-theme')

    useEffect(()=>{
        document.body.className = theme
    },[theme])

    const handleTheme = ()=>{
       if(theme === 'dark-theme'){
        setTheme('light-theme')
       }else{
        setTheme('dark-theme')
       }
    }
    
  return (
    <>
    <div className='theme' onClick={handleTheme}>{theme==="light-theme" ? <img src='./icons/sun.png' title='light-theme'/> : <img src='./icons/moon.png' title='dark-theme'/>}</div>
    </>
  )
}

export default Theme
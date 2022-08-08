import React, { useEffect, useState } from 'react'

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
    <button onClick={handleTheme}>{theme}</button>
    </>
  )
}

export default Theme
import React from 'react'
import './button.css'

const Button = ({title,className,onclick}) => {
  return (
    <button onClick={onclick} className={`${className} btn`}>{title}</button>
  )
}

export default Button
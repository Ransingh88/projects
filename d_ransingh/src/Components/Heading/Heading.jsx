import React from 'react'
import styled from 'styled-components'

const Type = styled.h2`
 font-size: 32px;
  margin-top: 30px;
  font-family: 'Inter', sans-serif;
`

const Heading = ({children}) => {
    return (
        <Type>
            {children}
        </Type>
    )
}

export  {Heading}

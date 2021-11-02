import React from 'react'
import {Tour} from './Tour'

const Tours = ({ toursData }) => {
    console.log(toursData)
    return (
        <div className="tours">
            {toursData.map((ele) => {
               return <Tour key={ele.id} {...ele} />
            })}
        </div>
    )
}

export  {Tours}

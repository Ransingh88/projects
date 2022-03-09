import React from 'react'

const ViewPage = ({ data }) => {
    return (
        <div>
            
                <div>
                <h1>{data.name}</h1>
                <h2>{data.age}</h2>
                <h2>{data.gender}</h2>
                <h2>{data.city}</h2>
                </div>
            
        </div>
    )
}

export  {ViewPage}

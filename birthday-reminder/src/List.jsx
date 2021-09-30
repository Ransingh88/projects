import React from 'react'
import './App.css'

const List = ({people}) => {
    return (
        <div className="ListContainer">
            {people.map((item) => (
                <div key={item.id} className="people">
                    <img src={item.image} alt={item.name} />
                    <div className="details">
                        <p>{ item.name}</p>
                        <p>{ item.age} Years</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export  {List}

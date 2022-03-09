import React from 'react'

const Menus = ({filterItems,category}) => {
    return (
        <div className="menu">
            {category.map((item,index) => {
                return <p key={index} onClick={()=>filterItems(item)}>{ item}</p>
            })}
            
        </div>
    )
}

export default Menus

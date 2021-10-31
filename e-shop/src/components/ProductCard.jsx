import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({id,title,category, image, price}) => {
    return (
        <>
            <Link to={`/product/${id}`}>
        <div>
            <h1>{title}</h1>
            <p>{ price}</p>
            <p>{category}</p>
            <img src={image} alt={title}  width="20%" />
                </div>
                </Link>
            </>
    )
}

export {ProductCard}

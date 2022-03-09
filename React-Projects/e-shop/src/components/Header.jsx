import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <p className="header__Name">e-Shop</p>
            <p>
                <Link to="/" className="header__link">
                Home
                </Link>
            </p>
        </div>
    )
}

export  {Header}

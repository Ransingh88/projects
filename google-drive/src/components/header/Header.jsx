import React from 'react'
import './Header.css'
import { SearchRoundedIcon } from '@mui/icons-material';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="" />
                <span>Drive</span>
            </div>
            <div className="header__search">
                <SearchRoundedIcon/>
                <input type="text" placeholder="Search in Drive" />
                {/* <FormatAlignCenterRoundedIcon/> */}
            </div>
            
        </div>
    )
}

export default Header

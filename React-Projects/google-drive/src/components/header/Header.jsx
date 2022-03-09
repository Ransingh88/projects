import React from 'react'
import './Header.css'
import { MdSearch, MdFilterList, MdSettings, MdHelpOutline, MdCheckCircleOutline, MdApps, MdLogout } from 'react-icons/md';

 
const Header = ({ avatar }) => {

    const handleLogout = () => {
        var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        
        console.log("Logout")
    }
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="" />
                <span>Drive</span>
            </div>
            <div className="header__search">
                <MdSearch/>
                <input type="text" placeholder="Search in Drive" />
                <MdFilterList/>
            </div>
            <div className="header__icons">
                <div className="header__iconLeft">
                    <MdCheckCircleOutline/>
                    <MdHelpOutline/>
                    <MdSettings/>
                </div>
                <div className="header__iconRight">
                    <MdApps />
                    <MdLogout onClick={handleLogout}/>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
            
        </div>
    )
}

export default Header

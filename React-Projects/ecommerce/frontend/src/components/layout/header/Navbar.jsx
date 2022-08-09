import './navbar.css'
import '../../../utils/internetConnection'
import { IoSearchOutline, IoCartOutline, IoSettingsOutline } from "react-icons/io5";
import Theme from '../../../utils/Theme';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navMenu = [
    {
      link:"men",
      label:"men"
    },
    {
      link:"women",
      label:"women"
    },
    {
      link:"sports",
      label:"sports"
    },
    {
      link:"electronics",
      label:"electronics"
    },
    {
      link:"mobile",
      label:"mobile"
    },
  ]
   
  return (
    <header className='container-fluid mainHeaderContainer'>
      <div className="container headerContainer">
          <div className="logo">
            <Link to="/">{true ? <img src="/images/logo/ecoshop-black.png" alt="ecoshop-logo" /> : <img src="/images/logo/ecoshop-white.png" alt="ecoshop-logo" />}</Link>
          </div>
          <div className="menus">
            {navMenu.map((menu)=>(
              <NavLink to={`/${menu.link}`}>{menu.label}</NavLink>
            ))}
          </div>
          <div className="userSettings">
            <div className='userSetting_searchBox'>
            <IoSearchOutline className='searchIcon'/>
            <input type="text"/>
            </div>
            <Link to="/cart"><IoCartOutline/></Link>
            <Link to="/setting"><IoSettingsOutline/></Link>
            <Theme/>
          </div>
      </div>
    </header>
  )
}

export default Navbar
import './navbar.css'
import '../../../utils/internetConnection'
import { IoSearchOutline, IoCartOutline, IoSettingsOutline } from "react-icons/io5";
import Theme from '../../../utils/Theme';

const Navbar = () => {
   
  return (
    <header className='container-fluid mainHeaderContainer'>
      <div className="container headerContainer">
        <div className="row">
          <div className="col-2 logo">
            {true ? <img src="/images/logo/ecoshop-black.png" alt="ecoshop-logo" /> : <img src="/images/logo/ecoshop-white.png" alt="ecoshop-logo" />}
          </div>
          <div className="col-8 menus">
            <p>Men</p>
            <p>Women</p>
            <p>Sports</p>
            <p>Electronics</p>
            <p>Mobiles</p>
            <Theme/>
          </div>
          <div className="col-2 userSettings">
            <IoSearchOutline/>
            <IoCartOutline/>
            <IoSettingsOutline/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
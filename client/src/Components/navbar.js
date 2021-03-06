import React from "react";
import "../css/navbar.css";
import { bubble as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';



class Navbar extends React.Component {

render(){
  return (
    <React.Fragment>

    <div className="menuClass">
      <div className="menuName">🥬 SimplEats</div>
      <div className="navIcons">
        <FontAwesomeIcon  icon={faHeart} className="iconNone" />
        <FontAwesomeIcon  icon={faHeart} className="iconHeart" />
        <FontAwesomeIcon  icon={faSearch}
        className="iconSearch" />
      </div>
    </div>
        <Menu className="menuSet" right
          >
          <div className="brad"><img src="https://res.cloudinary.com/dyeho7qym/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1569355027/Images/bradpitt_hsd6km.jpg" alt="bradpitt" className="bradpitt" />Welcome back, Brad! </div>
          <li id="home" className="menu-item" >My Account</li>
          <li id="about" className="menu-item">Delivery Info</li>
          <a id="contact" className="menu-item" href="/contact">Settings</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="/">Log Out</a>
        </Menu >
        </React.Fragment>


  )
  }
}



export default Navbar

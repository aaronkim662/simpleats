import React from "react";
import "../css/navbar.css";
import { bubble as Menu } from 'react-burger-menu'

class Navbar extends React.Component {
state: {
  showSettings:false
}
// <div>
//   <div class="navbar" id= "nav">
// <a href="#Home">Home</a>
// <div class="dropdown">
//     <a class="drop" href="#Home">Dropdown
//       <i class="fa fa-angle-double-down"></i>
//       <i class="fa fa-angle-double-up"></i>
//     </a>
//   <div class="drop-content">
//     <a href="#Prod1">Drop 1</a>
//     <a href="#Prod2">Prod 2</a>
//     <a href="#Prod3">Prod 3</a>
//   </div>
// </div>
// <a href="#Portfolio">News</a>
// <a href="#Blog">Blog</a>
// <a href="#Content">Contact</a>
// <a href="javascript:void(0);" class="icon" onclick="displayMenu()"><i class="fa fa-bars"></i></a>
// </div>
// </div>
// )
render(){
  return (
    <div className="menuClass">
      <div className="menuName">SimplEats</div>
      <i class="fas fa-heart"></i>


      <Menu className={"menuSet"} right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    </Menu >
    </div>

  )
  }
}



export default Navbar;

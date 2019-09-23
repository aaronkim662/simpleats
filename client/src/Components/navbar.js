import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div class="navbar" id= "nav">
    <a href="#Home">Home</a>
    <div class="dropdown">
        <a class="drop" href="#Home">Dropdown 
          <i class="fa fa-angle-double-down"></i>
          <i class="fa fa-angle-double-up"></i>
        </a>
      <div class="drop-content">
        <a href="#Prod1">Drop 1</a>
        <a href="#Prod2">Prod 2</a>
        <a href="#Prod3">Prod 3</a>
      </div>
    </div>
    <a href="#Portfolio">News</a>
    <a href="#Blog">Blog</a>
    <a href="#Content">Contact</a>
    <a href="javascript:void(0);" class="icon" onclick="displayMenu()"><i class="fa fa-bars"></i></a>
  </div>
    </div>
  )
}


export default Navbar;
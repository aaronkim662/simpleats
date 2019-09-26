import React from "react";
import "../css/footer.css";
import FB from "../images/fb.png"
import Twitter from "../images/twitter.png"
import Insta from "../images/insta.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <img className="socialImage" id="insta" src={Insta} alt="instagram"/>
        <img className="socialImage" id="twit" src={Twitter} alt="twitter"/>
        <img className="socialImage" id="fb" src={FB} alt="facebook"/>
      </div>
    </div>
  )
};

export default Footer;

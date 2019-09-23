import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">Contact Us: </div>
      <div className="socialMedia">
        <img className="socialImage" src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300" alt="instagram"/>
        <img className="socialImage" src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale0" alt="twitter"/>
        <img className="socialImage" src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="facebook"/>
      </div>
    </div>
  )
};

export default Footer;

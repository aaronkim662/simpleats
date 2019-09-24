import React from "react";
import "../css/recipes.css";
import one from "../images/1.png"
import two from "../images/2.png"
import three from "../images/3.png"
import four from "../images/4.png"
import five from "../images/5.png"
import six from "../images/6.png"

const Recipescard = () => {
  return (
    <div className="recipesContainer">
      <img className="recipes" src={one} alt="img1"/>
      <img className="recipes" src={four} alt="img2"/>
      <img className="recipes" src={three} alt="img3"/>
      <img className="recipes" src={two} alt="img4"/>
      <img className="recipes" src={five} alt="img5"/>
      <img className="recipes" src={six} alt="img6"/>

    </div>
  )
}

export default Recipescard;

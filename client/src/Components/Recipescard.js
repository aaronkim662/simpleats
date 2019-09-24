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
    <div>
      <img className="recipes" src={one}/>
      <img className="recipes" src={two}/>
      <img className="recipes" src={three}/>
      <img className="recipes" src={four}/>
      <img className="recipes" src={five}/>
      <img className="recipes" src={six}/>
      
    </div>
  )
}

export default Recipescard;
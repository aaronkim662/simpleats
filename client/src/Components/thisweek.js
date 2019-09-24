import React from "react";
import "../css/thisweek.css"
import Progress from './progressbar';

const Thisweek = () => {
  return (
    <div>
      <div className="thisWeekContainer">
        <div className="circleBase type1 chickenP"></div>
        <div className="circleBase type1 lobsterR"></div>
        <div className="circleBase type1 chickenN"></div>
        <div className="circleBase type1 forthInRow btm"></div>
        <div className="circleBase type1 btm"></div>
        <div className="circleBase type1 hidden btm"></div>
        <div className="circleBase type2">+</div>
      </div>
    </div>
  )
}

export default Thisweek
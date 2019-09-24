import React from "react";
import "../css/thisweek.css"
import Progress from './progressbar';

const Thisweek = () => {
  return (
    <div>
      <div className="thisWeekContainer">
        <img class="circleBase type1 chickenP"></img>
        <div class="circleBase type1 lobsterR"></div>
        <div class="circleBase type1 chickenN"></div>
        <div class="circleBase type1 forthInRow btm"></div>
        <div class="circleBase type1 btm"></div>
        <div class="circleBase type1 hidden btm"></div>
        <div class="circleBase type2">+</div>
      </div>
    </div>
  )
}

export default Thisweek
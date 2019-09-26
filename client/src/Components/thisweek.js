import React from "react";
import "../css/thisweek.css"

const Thisweek = () => {
  return (
    <div>
      <div className="thisWeekContainer">
        <div className="thisWeekContainerLabel">THIS WEEK</div>
        <div class="circleBase type1 chickenP"></div>
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

export default Thisweek;

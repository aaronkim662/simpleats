import React from "react";
import "../css/main.css";
import Progress from './progressbar';
import Recipescard from './Recipescard'
import Thisweek from './thisweek'

const Main = () => {
        // <Progress />
  return (
    <div>
      <Progress />
      <Thisweek />
      <Recipescard />
    </div>
  )
}

export default Main;

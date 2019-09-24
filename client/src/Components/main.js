import React from "react";
import "../css/main.css";
import Progress from './progressbar';
import Recipescard from './Recipescard'

const Main = () => {
  return (
    <div>
      <Progress />
      <Recipescard />
    </div>
  )
}

export default Main;

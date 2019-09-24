import React from "react";
import "../css/progressbar.css";
import "react-step-progress-bar/styles.css";
import progress from '../images/progress.png';

const Progressbar = () => {

  return (
    <div className="progressContainer">
    <img src={progress} alt="progress" className="progressbar"/>
    </div>
  )
}

export default Progressbar;

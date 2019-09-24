import React from "react";
import "../css/progressbar.css";
import "react-step-progress-bar/styles.css";
import progress from '../images/progressApp.png';
import desktop from '../images/desktop.png';

const Progressbar = () => {

  return (
    <div className="progressContainer">
      <img src={progress} alt="progressApp" className="progressApp" />
      <img src={desktop} alt="progressDesktop" className="progressDesktop"/>
    </div>
  )
}

export default Progressbar;

import React from "react";
import "../css/progressbar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Progressbar = () => {

  return (
    <div>

      <ProgressBar percent={60}>

        <Step transition="scale">
         {({ accomplished }) => (
           <div>
             <div className="indicator">
           <img
             style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
             width="30"
             src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851" alt="stage1"
           />
         <h5>Stage1</h5>
         </div>
         </div>
         )}
       </Step>
       <Step transition="scale">
         {({ accomplished }) => (
           <div className="indicator" >
           <img
             style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
             width="30"
             src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508" alt="stage2"
           />
         <h6>Recipes</h6>
         </div>
         )}
       </Step>
       <Step transition="scale">
         {({ accomplished }) => (
           <div className="indicator">
           <img
             style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
             width="30"
             src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png" alt="stage3"
           />
         <h6>Delivery</h6>
       </div>
         )}
       </Step>
      </ProgressBar>
    </div>
  )
}

export default Progressbar;

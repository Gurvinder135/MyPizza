import React, { useState } from "react";
import featured from "../img/featured.png";
import featured2 from "../img/featured2.png";
import featured3 from "../img/featured3.png";
import arrowl from "../img/arrowl.png";
import arrowr from "../img/arrowr.png";
import Menu from "./Menu";
import Navbar from "./Navbar";

function Home() {
  const [slider, setSlider] = useState(0);
  const handleSlider = (direc) => {
    if (direc === "-") {
      if (slider === 0) {
        setSlider(66.6);
      } else {
        let temp = slider - 33.3;
        setSlider(temp);
      }
    } else {
      if (slider === 66.6) {
        setSlider(0);
      } else {
        let temp = slider + 33.3;
        setSlider(temp);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="home" id="home">
        <img onClick={() => handleSlider("-")} src={arrowl} alt=""></img>
        <div
          className="homeCont"
          style={{ transform: `translateX(-${slider}%)` }}
        >
          <div className="homeImg">
            <img src={featured} alt=""></img>
          </div>
          <div className="homeImg">
            <img src={featured2} alt=""></img>
          </div>
          <div className="homeImg">
            <img src={featured3} alt=""></img>
          </div>
        </div>
        <img onClick={() => handleSlider("+")} src={arrowr} alt=""></img>
      </div>
      <Menu />
    </>
  );
}

export default Home;

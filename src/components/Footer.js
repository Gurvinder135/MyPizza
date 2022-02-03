import React from "react";
import arrow from "../img/arrowu.png";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
function Footer() {
  let location = useLocation();
  return (
    <div className="footer">
      <div className={`footimg ${location.pathname !== "/" && "none"} `}>
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          <img src={arrow} alt=""></img>
        </Link>
      </div>
      © 2022 MyPizza.
    </div>
  );
}

export default Footer;

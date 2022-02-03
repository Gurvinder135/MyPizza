import React, { useState } from "react";
import telphone from "../img/telephone.png";
import cart from "../img/cart.png";
import logo from "../img/logo.png";
import { Link } from "react-scroll";
import menu from "../img/menu.png";
import { Link as Li, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeFlash } from "./redux/pizzaSlice";

function Mininav() {
  const [sidebar, setSidebar] = useState(false);
  let cartValue = useSelector((state) => state.pizza.cart);
  const dispatch = useDispatch();
  const closeF = () => dispatch(closeFlash());
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="teleimg">
            <img src={telphone} alt=""></img>
          </div>
          <div className="phone">
            <div>ORDER NOW!</div>
            <div>012 345 678</div>
          </div>
        </div>
        <div onClick={closeF} className="center">
          <Li to="/" className="text">
            Homepage
          </Li>

          <div className="logo">
            <img src={logo} alt=""></img>
          </div>

          <Link
            activeClass="activea"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text"
          >
            Contact
          </Link>
        </div>
        <div className="right">
          <div onClick={closeF}>
            <Li to="cart">
              <img src={cart} alt=""></img>
              <div>{cartValue}</div>
            </Li>
          </div>
          <img onClick={handleSidebar} src={menu} alt=""></img>
          <div className={`sidebar ${sidebar && "flex"}`}>
            <Li onClick={closeF} to="/" className="text">
              Homepage
            </Li>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Mininav;

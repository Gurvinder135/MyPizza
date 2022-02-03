import React, { useState } from "react";
import telphone from "../img/telephone.png";
import cart from "../img/cart.png";
import logo from "../img/logo.png";
import { Link } from "react-scroll";
import menu from "../img/menu.png";
import { Link as Li } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  let cartValue = useSelector((state) => state.pizza.cart);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
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
      <div className="center">
        <Link
          activeClass="activea"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="text"
        >
          Homepage
        </Link>

        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
        <Link
          activeClass="activea"
          to="menu"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text"
        >
          Menu
        </Link>
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
        <div>
          <Li to="/cart">
            <img src={cart} alt=""></img>
            <div>{cartValue}</div>
          </Li>
        </div>
        <img onClick={handleSidebar} src={menu} alt=""></img>
        <div className={`sidebar ${sidebar && "flex"}`}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text"
          >
            Homepage
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text"
          >
            Menu
          </Link>
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
  );
}

export default Navbar;

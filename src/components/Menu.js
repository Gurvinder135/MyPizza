import React from "react";
import cc from "../img/chunky-chicken.jpg";
import dv from "../img/Deluxe_Veggie.jpg";
import itp from "../img/IndianTandooriPaneer.jpg";
import nvs from "../img/Non-Veg_Supreme.jpg";
import ve from "../img/Veg_E.jpg";
import vp from "../img/Veggie_P.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPizza } from "./redux/pizzaSlice";
let pizzaList = [
  {
    img: cc,
    name: "Indi Tandoori Paneer",
    price: 10,
    desc: "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo.",
    extras: [
      { name: "Extra-Cheese", price: 2 },
      { name: "JalaPeno-Dip", price: 3 },
      { name: "Garlic-Dip", price: 4 },
    ],
  },
  {
    img: dv,
    name: "Deluxe Veggie",
    price: 12,
    desc: "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.",
    extras: [
      { name: "Extra-Cheese", price: 2 },
      { name: "JalaPeno-Dip", price: 3 },
      { name: "Garlic-Dip", price: 4 },
    ],
  },
  {
    img: itp,
    name: "Chicken Fiesta",
    price: 10,
    desc: "Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum.",
    extras: [
      { name: "Extra-Cheese", price: 2 },
      { name: "JalaPeno-Dip", price: 3 },
      { name: "Garlic-Dip", price: 4 },
    ],
  },
  {
    img: nvs,
    name: "Non Veg Supreme",
    price: 11,
    desc: "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers.",
    extras: [
      { name: "Extra-Cheese", price: 2 },
      { name: "JalaPeno-Dip", price: 3 },
      { name: "Garlic-Dip", price: 4 },
    ],
  },
  {
    img: ve,
    name: "Veg Extravaganza",
    price: 13,
    desc: "A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.",
    extras: [
      { name: "Extra-Cheese", price: 2 },
      { name: "JalaPeno-Dip", price: 3 },
      { name: "Garlic-Dip", price: 4 },
    ],
  },
  {
    img: vp,
    name: "Veggie Paradise",
    price: 10,
    desc: "Goldern Corn, Black Olives, Capsicum & Red Paprika.",
    extras: [
      { name: "Extra-Cheese", price: 2 },
      { name: "JalaPeno-Dip", price: 3 },
      { name: "Garlic-Dip", price: 4 },
    ],
  },
];
function Menu() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addPizza(pizzaList));
  };

  return (
    <div className="menu" id="menu">
      <div className="about">
        THE BEST PIZZA IN TOWN!
        <br></br>
        <span>
          There is something for everyone here. The vegetarians,
          non-vegetarians, the sides’ lovers and also the ones who love to have
          something sweet by the time they reach the last bite of the last slice
          of pizza slice.
        </span>
      </div>
      <div className="pizzaList">
        {pizzaList.map((pizza, index) => {
          return (
            <div onClick={handleClick} key={index} className="pizza">
              <Link to={`/pizza/${index}`}>
                <img src={pizza.img} alt=""></img>
                <h1>{pizza.name}</h1>
                <span>${pizza.price}</span>
                <p>{pizza.desc}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

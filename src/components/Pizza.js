import React, { useState } from "react";
import size from "../img/size.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/pizzaSlice";
import { useParams, useNavigate } from "react-router-dom";

function Pizza() {
  const pizzalist = useSelector((state) => {
    return state.pizza.pizzaList;
  });
  let params = useParams();
  const navigation = useNavigate();
  let pizzaList = pizzalist[params.id];

  const [option, setOption] = useState({
    size: "sm",
    price: pizzaList.price,
    quantity: 1,
    extra: [
      { name: "Extra-Cheese", value: false },
      { name: "JalaPeno-Dip", value: false },
      { name: "Garlic-Dip", value: false },
    ],
  });
  let reset = {
    size: "sm",
    price: pizzaList.price,
    quantity: 1,
    extra: [
      { name: "Extra-Cheese", value: false },
      { name: "JalaPeno-Dip", value: false },
      { name: "Garlic-Dip", value: false },
    ],
  };
  const handleClick = (click, e) => {
    let temp = { ...option };
    if (click === "sm" || click === "md" || click === "lg") {
      temp.size = click;
      let p = 0;

      click === "sm" && (p = pizzaList.price);

      click === "md" && (p = pizzaList.price + 2);

      click === "lg" && (p = pizzaList.price + 4);
      temp.price = p;
    } else if (click === "checkbox") {
      if (e.target.checked === true) {
        temp.price += parseInt(e.target.value);
        let t = temp.extra.map((arr) => {
          if (arr.name === e.target.name) {
            arr.value = true;
          }
          return arr;
        });
        temp["extra"] = t;
      } else {
        temp.price -= e.target.value;
        let t = temp.extra.map((arr) => {
          if (arr.name === e.target.name) {
            arr.value = false;
          }
          return arr;
        });
        temp["extra"] = t;
      }
    } else if (click === "slider") {
      temp.quantity = e.target.value;
    }
    setOption(temp);
  };
  const dispatch = useDispatch();
  const buttonClick = () => {
    let list = [];
    option.extra.forEach((arr) => {
      if (arr.value === true) {
        list.push(arr.name);
      }
    });
    let temp = {
      img: pizzaList.img,
      name: pizzaList.name,
      extra: list,
      price: option.price,
      quantity: option.quantity,
    };
    dispatch(addToCart(temp));
    setOption(reset);
    navigation("/cart");
  };

  return (
    <div className="pizzaMain">
      <img src={pizzaList.img} alt=""></img>
      <div className="pizzaCont">
        <div>{pizzaList.name}</div>
        <div>${option.price}</div>
        <div>{pizzaList.desc}</div>
        <div>Choose the size</div>
        <div className="size">
          <div
            onClick={() => {
              handleClick("sm");
            }}
            className="sm"
          >
            <img src={size} alt="" className="small"></img>
            <div className={option.size === "sm" ? "checked" : ""}>Small</div>
          </div>
          <div
            onClick={() => {
              handleClick("md");
            }}
            className="md"
          >
            <img src={size} alt="" className="medium"></img>
            <div className={option.size === "md" ? "checked" : ""}>Medium</div>
          </div>
          <div
            onClick={() => {
              handleClick("lg");
            }}
            className="lg"
          >
            <img src={size} alt="" className="large"></img>
            <div className={option.size === "lg" ? "checked" : ""}>Large</div>
          </div>
        </div>
        <div>Choose Additionals</div>
        <div className="ing">
          {pizzaList.extras.map((pizza, index) => {
            return (
              <div key={index}>
                <input
                  onChange={(e) => {
                    handleClick("checkbox", e);
                  }}
                  type="checkbox"
                  id={pizza.name}
                  name={pizza.name}
                  value={pizza.price}
                  checked={option.extra[index].value}
                />
                <label htmlFor={pizza.name}> {pizza.name}</label>
              </div>
            );
          })}
        </div>
        <div className="qty">
          <label>Quantity: </label>
          <input
            onChange={(e) => {
              handleClick("slider", e);
            }}
            type="number"
            name="num"
            min="1"
            max="80"
            value={option.quantity}
          />
        </div>
        <button onClick={buttonClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Pizza;

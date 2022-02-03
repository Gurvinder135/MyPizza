import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart, closeFlash, changeStatus } from "./redux/pizzaSlice";
import x from "../img/x.png";
import bike from "../img/bike.png";
import delivered from "../img/delivered.png";
import bake from "../img/bake.png";
import paid from "../img/paid.png";
function Cart() {
  let pizzaList = useSelector((state) => state.pizza.cartList);
  let price = useSelector((state) => state.pizza.price);
  let flash = useSelector((state) => state.pizza.flashMessage);
  let status = useSelector((state) => state.pizza.status);
  const dispatch = useDispatch();
  const handleStatus = () => {
    setTimeout(() => {
      setTimeout(() => {
        dispatch(changeStatus({ prepare: 2, bike: 2, deliver: 1 }));
      }, 16000);
      dispatch(changeStatus({ prepare: 2, bike: 1, deliver: 0 }));
    }, 6000);
  };
  return (
    <div className="cart">
      {pizzaList.length === 0 ? (
        <div className="emptyCart">Nothing in the Cart!</div>
      ) : (
        <>
          <div className="cartCont">
            <div className="cartHead">Product</div>
            <div className="cartHead">Name</div>
            <div className="cartHead">Extras</div>
            <div className="cartHead">Price</div>
            <div className="cartHead">Quantity</div>
            <div className="cartHead">Total</div>

            {pizzaList.map((pizza, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="cartImg">
                    <img src={pizza.img} alt=""></img>
                  </div>
                  <div className="cartText">{pizza.name}</div>
                  <div className="cartText">
                    {pizza.extra.map((arr, index) => {
                      return <div key={index}>{arr}</div>;
                    })}
                  </div>
                  <div className="cartText">$ {pizza.price}</div>
                  <div className="cartText">{pizza.quantity}</div>
                  <div className="cartText" style={{ fontWeight: "600" }}>
                    ${pizza.price * pizza.quantity}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="cartBox">
            CART TOTAL
            <span>
              <div>Subtotal: </div> $ {price} <br></br>
              <div>Taxes: </div> $ {(price * 0.13).toFixed(1)}
              <br></br>
              <div>Total: </div> $ {(price + price * 0.13).toFixed(1)}
            </span>
            <br></br>
            <button
              onClick={() => {
                dispatch(emptyCart());
                handleStatus();
              }}
            >
              Pay Now
            </button>
          </div>
        </>
      )}
      {flash && (
        <div className="flashMessage">
          <div>
            <div onClick={() => dispatch(closeFlash())} className="x">
              <img src={x} alt=""></img>
            </div>
            Thank you for ordering our Pizza, below is status of your order.
            <div className="status">
              <div className="statusBox">
                <div className="checked">
                  <img src={paid} alt=""></img>
                  Payment
                </div>
              </div>
              <div className="statusBox">
                <div
                  className={`${status.prepare === 0 ? "opacity" : ""}${
                    status.prepare === 1 ? "animated" : ""
                  }${status.prepare === 2 ? "checked" : ""}`}
                >
                  <img src={bake} alt=""></img>
                  Preparing
                </div>
              </div>
              <div className="statusBox">
                <div
                  className={`${status.bike === 0 ? "opacity" : ""}${
                    status.bike === 1 ? "animated" : ""
                  }${status.bike === 2 ? "checked" : ""}`}
                >
                  <img src={bike} alt=""></img>
                  On the way
                </div>
              </div>
              <div className="statusBox">
                <div
                  className={`${status.deliver === 0 ? "opacity" : ""}${
                    status.deliver === 1 ? "animated" : ""
                  }${status.deliver === 2 ? "checked" : ""}`}
                >
                  <img src={delivered} alt=""></img>
                  Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

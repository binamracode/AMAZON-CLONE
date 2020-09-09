import React from "react";
import "../css/cart.css";
import Subtotal from "./Subtotal";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="cart__ad"
          alt=""
        />

        <div>
          <h2 className="cart__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;

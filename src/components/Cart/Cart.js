import React, { useContext } from "react";
import ShopContext from "../../context/shop/shopContext";
import CartItemList from "./CartItemList";
import "./cart.scss";

const Cart = ({ cartList, removeFromCart }) => {
  const shopContext = useContext(ShopContext);
  const { showCart } = shopContext;
  return (
    <section id="cart" className={`major ${showCart ? "show" : ""}`}>
      <div className="container">
        <div className="row">
          <CartItemList cartList={cartList} removeFromCart={removeFromCart} />
        </div>
      </div>
      <div className="container">
        <div className="row">TOTAL</div>
      </div>
    </section>
  );
};

export default Cart;

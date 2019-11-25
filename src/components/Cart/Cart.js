import React, { useContext } from "react";
import ShopContext from "../../context/shop/shopContext";
import CartItemList from "./CartItemList";
import "./cart.scss";

const Cart = () => {
  const shopContext = useContext(ShopContext);
  const { cartList, showCart } = shopContext;
  return (
    <section id="cart" className={`major ${showCart ? "show" : ""}`}>
      <div className="container">
        <div className="row">
          <CartItemList cartList={cartList} />
        </div>
      </div>
    </section>
  );
};

export default Cart;

import React from "react";
import CartItemList from "./CartItemList";

const Cart = () => (
  <section id="cart" className="major">
    <div className="inner">
      <header className="my-5 pt-5"></header>
      <div className="row mt-5">
        <div className="container contact_section">
          <div className="contact_section_info">
            <CartItemList />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Cart;

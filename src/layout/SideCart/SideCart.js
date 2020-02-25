import React, { Fragment, useContext } from "react";
import ShopContext from "../../context/shop/shopContext";
import SideCartItem from "./SideCartItem";
import { Link } from "gatsby";
import "./style.scss";
const SideCart = props => {
  const shopContext = useContext(ShopContext);

  const { cartList } = shopContext;

  return (
    <Fragment>
      <div id="side_cart">
        <div className="icon fa-times sidecart_close" onClick={e => props.onToggleCart()} />
        <div className="container my-5 px-5">
          <div className="row mb-4">
            <ul>
              {cartList.map(item => (
                <li className="my-2">
                  <SideCartItem item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="checkout_button">
            <Link to="/checkout">
              <button className="btn btn-primary">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideCart;

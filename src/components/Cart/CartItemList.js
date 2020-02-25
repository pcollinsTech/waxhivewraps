import React, { Fragment } from "react";
import CartItem from "./CartItem";

const CartItemList = ({ cartList, removeFromCart }) => {
  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <table className="table table-info">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItemList;

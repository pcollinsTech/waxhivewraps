import React, { Fragment, useContext } from "react";
import CartItem from "./CartItem";
import ShopContext from "../../context/shop/shopContext";

const CartItemList = () => {
  const shopContext = useContext(ShopContext);

  const { cartList } = shopContext;

  console.log(cartList);
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
                <CartItem key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItemList;

import React, { Fragment } from "react";
import CartItem from "./CartItem";
import ShopContext from "../../context/shop/shopContext";
import productImage from "../../assets/images/eddie.jpg";

const CartItemList = () => {
  // const shopContext = useContext(ShopContext);

  // const { loading, cart } = shopContext;

  const cart = [
    {
      id: "1",
      title: "Wrap Number one",
      quantity: 1,
      img: productImage,
      slug: "wrap-number-one"
    },
    {
      id: "1",
      title: "Wrap Number two",
      quantity: 1,
      img: productImage,
      slug: "wrap-number-two"
    },
    {
      id: "1",
      title: "Wrap Number three",
      quantity: 1,
      img: productImage,
      slug: "wrap-number-three"
    }
  ];

  return (
    <Fragment>
      <table>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </table>
    </Fragment>
  );
};

export default CartItemList;

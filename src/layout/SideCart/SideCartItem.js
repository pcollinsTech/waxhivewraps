import React, { Fragment, useContext } from "react";
import ShopContext from "../../context/shop/shopContext";
import QuantityCounter from "../../components/QuantityCounter";

const SideCartItem = ({ item: { images, name, quantity }, item }) => {
  const shopContext = useContext(ShopContext);

  const { setQuantity } = shopContext;

  const addToQuantity = quantity => {
    setQuantity(item.id, quantity);
  };
  return (
    <Fragment>
      <div className="d-flex justify-content-between side_cart_item">
        <img src={images[0].src} alt="" />
        <div className="product_info">{name}</div>
        <div className="product_total">
          <QuantityCounter quantity={quantity} addToQuantity={addToQuantity} />
        </div>
      </div>
    </Fragment>
  );
};

export default SideCartItem;

import React, { Fragment } from "react";
import { Link } from "gatsby";
import QuantityCounter from "../QuantityCounter";
const CartItem = ({ item, removeFromCart }) => {
  const { name, slug, quantity, images, price, id } = item;

  // removeItem = id => {};
  return (
    <Fragment>
      <tr key={id}>
        <td>
          <Link to={`product/${slug}`}>
            <img src={images[0].src} alt="" width="80px;" style={{ marginRight: "5px" }} />
            {name}
          </Link>
        </td>
        <td align="center">£{price}</td>
        <td align="center">
          <QuantityCounter quantity={quantity} />
        </td>
        <td align="center">
          <button className="btn btn-danger" onClick={e => removeFromCart(id)}>
            Remove
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default CartItem;

import React, { Fragment } from "react";
import { Link } from "gatsby";
const CartItem = ({ item }) => {
  const { slug, title, quantity, productImage, id } = item;
  return (
    <Fragment>
      <tr key={id}>
        <Link to={`product/${slug}`}>
          <th scope="row">
            <img src={productImage} alt="" />
            {title}
          </th>
          <td>${quantity}</td>
          <td>Remove</td>
        </Link>
      </tr>
    </Fragment>
  );
};

export default CartItem;

import React, { Fragment, useContext } from "react";
import { Link } from "gatsby";
import ShopContext from "../../context/shop/shopContext";

const ProductCard = ({ item }) => {
  const shopContext = useContext(ShopContext);

  const { addToCart } = shopContext;

  const { slug, images } = item;

  // const addItemToCart = item => {
  //   addToCart(item);
  // };
  return (
    <Fragment>
      <div className="col-sm-4">
        <div className="product card_container">
          <Link to={`/${slug}`}>
            <img src={images[0].src} alt="" />
          </Link>

          <div className="text-center flex-">
            <Link to={`/${slug}`}>
              <button className="btn btn-info my-2">View</button>
            </Link>
            <button className="btn btn-primary  my-2" onClick={e => addToCart(item)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;

import React, { useContext } from "react";
import Helmet from "react-helmet";
import ShopContext from "../context/shop/shopContext";

import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
// import Stripe from "../components/Stripe";
import banner from "../assets/images/gardenBanner.jpg";
const CheckoutPage = () => {
  const shopContext = useContext(ShopContext);
  console.log("CART LIST", shopContext);
  const { cartList, removeFromCart } = shopContext;
  return (
    <Layout>
      <Helmet
        title="WaxHiveWraps | Cart"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      ></Helmet>
      <Banner img={banner} title="Cart" />
      <svg width="123" height="110" version="1.1" id="hexagon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1437.8 1425.2">
        <g>
          <clipPath id="clip">
            <polygon points="1058.0000000000 20.3000000000, 1022.9000000000 0.0000000000, 367.8000000000 0.4000000000, 332.7000000000 20.7000000000, 5.4000000000 588.2000000000, 5.4000000000 628.8000000000, 333.3000000000 1196.0000000000, 368.4000000000 1216.3000000000, 1023.5000000000 1215.9000000000, 1058.6000000000 1195.6000000000, 1386.0000000000 628.0000000000, 1386.0000000000 587.4000000000, 1058.0000000000 20.3000000000"></polygon>
            <image clipPath="url(#clip);" className="quote--image" width="100%" height="100%" src={banner}></image>
          </clipPath>
        </g>
      </svg>
      {/* <Stripe /> */}
      <Cart cartList={cartList} removeFromCart={removeFromCart} />
    </Layout>
  );
};

export default CheckoutPage;

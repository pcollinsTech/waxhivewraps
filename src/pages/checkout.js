import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import banner from "../assets/images/gardenBanner.jpg";
const CheckoutPage = () => {
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
      <Cart />
    </Layout>
  );
};

export default CheckoutPage;

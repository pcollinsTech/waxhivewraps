import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import Products from "../components/Products/Products";
import banner from "../assets/images/gardenBanner.jpg";
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="WaxHiveWraps | Shop"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        ></Helmet>

        <Banner img={banner} title="Shop" />

        <div id="main">
          <div className="row home_about">
            <div className="container">
              <p className="mt-5">
                A WaxHiveWrap is a reusable beeswax food wrap alternative to single-use items in the kitchen like cling film and other plastics. The
                wraps are handcrafted by us in our workshop in Thy, Denmark, from local beeswax, pine resin, organic coconut oil and OEKO Tex standard
                100 cottons.
              </p>
            </div>
          </div>
          <Products products={this.props.data.allWcProducts.edges} />
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;

export const productsQuery = graphql`
  query {
    allWcProducts {
      edges {
        node {
          price
          purchasable
          catalog_visibility
          id
          name
          slug
          regular_price
          sale_price
          description
          images {
            alt
            name
            src
          }
          product_variations {
            price
            weight
          }
          wordpress_id
        }
      }
    }
  }
`;

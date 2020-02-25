import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import Banner from "../components/Banner";
import banner from "../assets/images/grassWrapsInBox.jpg";
export const ProductPageTemplate = ({ img, title, content, price }) => {
  return (
    <React.Fragment>
      <Banner title={title} img={banner} />
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-5">
            <img src={img} alt="" />
          </div>

          <div className="col-sm-7" dangerouslySetInnerHTML={{ __html: price }} />
          <div className="col-sm-7" dangerouslySetInnerHTML={{ __html: content }} />
          <button className="btn btn-primary  my-2">Add To Cart</button>
        </div>
      </div>
    </React.Fragment>
  );
};

ProductPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string
};

const ProductItemTemplate = ({ data }) => {
  const { wcProducts: product } = data;
  console.log("product", product);
  return (
    <Layout>
      <Helmet title={`${product.name} | Product`} />
      <ProductPageTemplate
        img={product.images[0].src}
        content={product.short_description}
        title={product.name}
        price={product.product_variations.price}
      />
    </Layout>
  );
};

ProductItemTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProductItemTemplate;

export const pageQuery = graphql`
  fragment ProductFields on wcProducts {
    price
    type
    purchasable
    catalog_visibility
    featured
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
    stock_status
    date_created
    short_description
    variations
    wordpress_id
  }
  query ProductItemByID($id: String!) {
    wcProducts(id: { eq: $id }) {
      price
      type
      purchasable
      catalog_visibility
      featured
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
      stock_status
      date_created
      short_description
      variations
      wordpress_id
    }
  }
`;

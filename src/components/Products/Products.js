import React, { Fragment } from "react";
import { Link } from "gatsby";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  // const {
  //   allWcProducts: { edges: products }
  // } = data;
  return (
    <Fragment>
      <div id="products">
        <h2 className="black mb-5">Our Wraps</h2>
        <div className="row">
          <div className="container products__container">
            {products.map(item => (
              <ProductCard item={item.node} key={item.node.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button>
          <Link to="/contact">Contact us for more information</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default Products;

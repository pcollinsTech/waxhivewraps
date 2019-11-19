import React, { Fragment } from "react";
import { Link } from "gatsby";

import becky from "../../assets/images/productImages/becky.jpg";
import cma from "../../assets/images/productImages/cma.jpg";
import cma2 from "../../assets/images/productImages/cma2.jpg";
import phill from "../../assets/images/productImages/phill.jpg";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    title: "The Becky",
    slug: "the-becky",
    img: becky
  },
  {
    id: "1",
    title: "The cma",
    slug: "the-cma",
    img: cma
  },
  {
    id: "1",
    title: "The cma2",
    slug: "the-cma2",
    img: cma2
  },
  {
    id: "1",
    title: "The phill",
    slug: "the-phill",
    img: phill
  },
  {
    id: "1",
    title: "The Becky",
    slug: "the-becky",
    img: becky
  }
];

const Products = () => {
  return (
    <Fragment>
      <div id="products">
        <h2 className="black mb-5">Our Wraps</h2>
        <div className="row">
          <div className="container products__container">
            {products.map(item => (
              <ProductCard item={item} key={item.id} />
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

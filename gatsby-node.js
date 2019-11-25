/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const _ = require("lodash");
const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

// const becky = require("../src/assets/images/productImages/becky.jpg");
// const cma = require("../src/assets/images/productImages/cma.jpg");
// const cma2 = require("../src/assets/images/productImages/cma2.jpg");
// const phill = require("../src/assets/images/productImages/phill.jpg");

// const products = [
//   {
//     id: "1",
//     title: "The Becky",
//     slug: "the-becky",
//     img: becky
//   },
//   {
//     id: "1",
//     title: "The cma",
//     slug: "the-cma",
//     img: cma
//   },
//   {
//     id: "1",
//     title: "The cma2",
//     slug: "the-cma2",
//     img: cma2
//   },
//   {
//     id: "1",
//     title: "The phill",
//     slug: "the-phill",
//     img: phill
//   },
//   {
//     id: "1",
//     title: "The Becky",
//     slug: "the-becky",
//     img: becky
//   }
// ];

// You can delete this file if you're not using it
const getOnlyPublished = edges => _.filter(edges, ({ node }) => node.status === "publish");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allWcProducts {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const productTemplate = path.resolve(`./src/templates/product.js`);

    const products = result.data.allWcProducts.edges;

    // Iterate over the array of products
    _.each(products, ({ node: product }) => {
      // Create the Gatsby page for this WordPress product
      createPage({
        path: `/${product.slug}/`,
        component: productTemplate,
        context: {
          id: product.id
        }
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};

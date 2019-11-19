import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ProductPageTemplate = ({ img, title }) => {
  return (
    <React.Fragment>
      <section id="blog_banner" className="blog_major">
        <img src={img} alt={title} style={{ width: "100%" }} />
        <div className="inner">
          <header>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light blog_title" dangerouslySetInnerHTML={{ __html: title }} />
          </header>
        </div>
      </section>
    </React.Fragment>
  );
};

ProductPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string
};

const PortfolioItem = ({ data }) => {
  const {
    wordpressWpPortfolio: client,
    wordpressAcfPortfolio: { acf: acf }
  } = data;
  console.log("data", data);
  return (
    <Layout>
      <Helmet title={`${client.title} | Portfolio`} />
      <ProductPageTemplate
        featured_image={client.featured_media.source_url}
        content={client.content}
        title={client.title}
        date={client.date}
        acf={acf}
      />
    </Layout>
  );
};

PortfolioItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default PortfolioItem;

// export const pageQuery = graphql`
//   fragment PortfolioFields on wordpress__wp_portfolio {
//     id
//     slug
//     date(formatString: "MMMM DD, YYYY")
//     title
//     featured_media {
//       source_url
//     }
//     acf {
//       first_service_title
//       second_service_title
//       third_service_title
//       first_banner_image {
//         source_url
//       }
//       first_service_image {
//         source_url
//       }
//       first_service
//       intro
//       second_service
//       third_service_image
//       third_service
//       intro_image {
//         source_url
//       }
//       second_banner_image {
//         source_url
//       }
//       third_banner_image {
//         source_url
//       }
//       second_service_image {
//         source_url
//       }
//     }
//   }
//   query PortfolioItemByID($id: Int!) {
//     wordpressWpPortfolio(wordpress_id: { eq: $id }) {
//       id
//       title
//       slug
//       content
//       date(formatString: "MMMM DD, YYYY")
//       featured_media {
//         source_url
//       }
//     }
//     wordpressAcfPortfolio(wordpress_id: { eq: $id }) {
//       acf {
//         first_service_title
//         second_service_title
//         third_service_title
//         first_banner_image {
//           source_url
//         }
//         first_service_image {
//           source_url
//         }
//         first_service
//         intro
//         second_service
//         third_service_image
//         third_service
//         intro_image {
//           source_url
//         }
//         second_banner_image {
//           source_url
//         }
//         third_banner_image {
//           source_url
//         }
//         second_service_image {
//           source_url
//         }
//       }
//     }
//   }
// `

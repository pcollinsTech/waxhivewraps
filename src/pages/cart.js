import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Cart from "../components/Cart";

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Podium Ice Skate | Contact"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        ></Helmet>

        <Cart />
      </Layout>
    );
  }
}

export default Contact;

import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import BannerContact from "../components/BannerContact";

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="WaxHiveWraps | Contact"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        ></Helmet>

        <BannerContact />
      </Layout>
    );
  }
}

export default Contact;

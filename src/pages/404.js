import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

const NotFoundPage = () => (
  <Layout>
    <Banner headingOne="404 Page Not found" />

    <div id="main">
      <div className="row home_about">
        <div className="container">
          <h1>NOT FOUND</h1>
          <p>You just hit a link that doesn&#39;t exist... </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

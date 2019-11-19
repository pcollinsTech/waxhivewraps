import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ItsAllAboutYou = () => (
  <StaticQuery
    query={graphql`
      query {
       file(relativePath: { eq: "its_all_about_you.jpg" }) {
          childImageSharp {
            fixed(width: 1640) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    }}
  />
)

export default ItsAllAboutYou
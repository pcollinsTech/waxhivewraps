import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Hello = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "hello.png" }) {
          childImageSharp {
            id
            fixed(width: 300) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      return <Img fixed={data.childImageSharp.fixed} />
    }}
  />
)

export default Hello

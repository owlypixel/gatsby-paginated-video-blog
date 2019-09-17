import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Contact = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  return(
    <Layout  title={siteTitle}>
      <h1>contact</h1>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
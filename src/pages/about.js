import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const About = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;

  return(
    <Layout  title={siteTitle}>
      <h1>About</h1>
    </Layout>
  )
}

export default About


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
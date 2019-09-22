import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

// Components
import { Link, graphql } from "gatsby"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in the category "${category}"`
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} >
      <div className="outer-page-wrap">
        <h1 className="blog-heading">{categoryHeader}</h1>
        <div>
          <ul className="page-list">
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li key={slug}>
                  <h3>
                    <Link className="page-list__link" to={slug}>{title}</Link>
                  </h3>
                </li>
              )
            })}
          </ul>
          <div className="nav-links">
            <Link className="generic-link" to="/categories">All categories</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
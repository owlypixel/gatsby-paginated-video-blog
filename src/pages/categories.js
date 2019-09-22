import React from "react"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title},
    },
  },
}) => (
  <Layout  title={title}>
    <div className="outer-page-wrap">
      <h1 className="blog-heading">Categories</h1>
      <div>
        <ul className="page-list">
          {group.map(category => (
            <li key={category.fieldValue}>
              <h3>
                <Link className="page-list__link" to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)
CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default CategoriesPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
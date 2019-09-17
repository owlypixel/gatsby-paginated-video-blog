import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"
import Video from '../components/video'

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="item-grid">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const tags = node.frontmatter.tags
            const categories = node.frontmatter.categories
            const author = node.frontmatter.author
            const videoSrcURL = node.frontmatter.videoSrcURL
            return (
              <article key={node.fields.slug} className="single-item">
                  <div className="video-wrap">
                    <Link className="cover-link" style={{textDecoration: 'none'}} to={node.fields.slug}></Link>
                    <Video 
                      videoSrcURL={videoSrcURL}
                      videoTitle={title}
                    />
                  </div>
                  <div className="titleAndCategory">
                    <h3 className="title">
                      <Link to={node.fields.slug}>{title}</Link>
                    </h3>
                    <div className="category">
                      {categories.map(category => {
                        return(
                          <Link key={category} to={`/categories/${kebabCase(category)}/`} >
                            {category} 
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                  <div className="dateAndTags">
                    <small className="item-date">{node.frontmatter.date}</small>
                    <div className='item-tags'> 
                      {tags.map(tag => {
                        return(
                          <Link className="badge" key={tag} to={`/tags/${kebabCase(tag)}/`} >
                            {tag} 
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                  <section className="item-description">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
              </article>
            )
          })}
        </div>
        <ul className='pagination'>
              <li>
            {!isFirst && (
              <Link className="prev" to={`/${prevPage}`} rel="prev">
                ← Prev
              </Link>
            )}
            </li>
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
              >
                <Link
                  to={`/${i === 0 ? '' : i + 1}`}
                  style={{
                    color: i + 1 === currentPage ? '#ffffff' : '',
                    background: i + 1 === currentPage ? '#007acc' : '',
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            <li>
            {!isLast && (
              <Link className="next" to={`/${nextPage}`} rel="next">
                Next →
              </Link>
            )}
            </li>
          </ul>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            videoSrcURL
            tags
            categories
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
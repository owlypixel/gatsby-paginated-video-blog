import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from '../components/video'
import getVideoImage from '../utils/videoImageHelper'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const videoSrcURL = post.frontmatter.videoSrcURL
    const videoId = getVideoImage(videoSrcURL)
    const videoImage = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={videoImage}
        />
        <div className="outer-page-wrap">
          <article>
            <div className="post-header">
              <h1
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  display: `block`,
                  marginBottom: '5px',
                  marginTop: '5px',
                }}
              >
                {post.frontmatter.date}
              </p>
            </div>
            <div className="video-embed-wrapper">
              <Video
                videoSrcURL={videoSrcURL}
                videoTitle={post.frontmatter.title}
                width='640'
                height='360'
              />
            </div>
            <p className="video-post-description">{post.frontmatter.description}</p>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr
              style={{
                marginBottom: 0,
              }}
            />
            <footer>
            </footer>
          </article>

          <nav>
            <ul className="post-nav"
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        videoSrcURL
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Contact = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  return(
    <Layout  title={siteTitle}>
      <div className="outer-page-wrap">
        <h1 className="blog-heading">Contact</h1>
        <p>If you've come across a cool guitar video, just send it through the contact form, I'll make sure to post it later.</p>
        <form className="contact-form" method="post" action="https://formspree.io/owlypixel@gmail.com">
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required/>
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="_replyto" id="email" required/>
        </p>
        <p>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" required/>
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required/>
        </p>
        <button className="form-submit-button" type="submit">Send</button>
      </form>
      </div>
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
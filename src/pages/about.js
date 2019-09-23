import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const About = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;

  return(
    <Layout  title={siteTitle}>
      <div className="outer-page-wrap">
        <h1 className="blog-heading">About</h1>
        <p>There are a lot of great guitar players in the world. My friend is one of them. I call him simply Guitar God. We both share the same obsession - guitar. </p>
        <p>Once in a while, he gets me out of my predictable workaholic life and we travel to the capital city to see some cool concert. Just recently it was a Paul Gilbert concert. I still can't quite recover from that.</p>
        <p>When we meet we usually spend hours discussing new videos that have emerged on the internet. "Have you seen this crazy dude playing this incredible riff on his new 7-string Ibanez?". "Oh, let me show this video, insane melodic improvisation, you're gonna love it!". This is the type of conversations that happen on our way to the concert.</p>
        <p>There are so many cool new guitar videos being uploaded every day, that sometimes we both struggle to find a video that we came across earlier.</p>
        <p>Since I work on the web, I decided to create a place where I'll be posting all interesting guitar-related videos. </p>
        <p>I hope that now we won't miss anything interesting and exciting from the guitar community.</p>
        <p>Oh, by the way, if you've come across a cool guitar video, just send it through the contact form, I'll make sure to post it later.</p>
        <p>Keep on rocking in the free world!</p>
      </div>
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
module.exports = {
  siteMetadata: {
    title: `Check This Out, Guitar God`,
    author: `Owlypixel`,
    description: `A guitar video blog`,
    siteUrl: `https://checkthisoutguitargod.com`,
    social: {
      twitter: `owlypixel`,
    },
    menuLinks: [
      {
         name:'About',
         link:'/about'
      },
      {
         name:'Contact',
         link:'/contact'
      },
      {
         name:'Categories',
         link:'/categories'
      },
      {
         name:'Tags',
         link:'/tags'
      },
      {
        name:'🔍 ',
        link:'/search'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-118332650-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Check This Out, Guitar God`,
        short_name: `CTOGG`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0f202e`,
        display: `standalone`,
        icon: `content/assets/ctogg-logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto Condensed`,
            variants: [`400`, `700`]
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`, `800`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{ name: 'en' }],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 }},
          { name: 'description', store: true, attributes: { boost: 5 }},
          { name: 'content' },
          { name: 'url', store: true },
          { name: 'date', store: true }
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            url: node => node.fields.slug,
            date: node => node.frontmatter.date
          }
        },
        filename: 'search_index.json',
      }
    }
  ],
}

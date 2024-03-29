const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Mertcan's Portfolio`,
    description: `Mertcan Akardere's portfolio page.`,
    author: `@mertcanakardere`,
    menuLinks:[
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'CV',
        link: '/cv'
      },
      {
        name: 'Sample',
        link: '/code'
      },
      {
        name: 'Contact',
        link: '/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
                {
                  resolve: `gatsby-remark-images-contentful`,
                  options: {
                    maxWidth: 1500,
                  }
                },
                {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-cs",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
            languageExtensions: [
              {
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
            prompt: {
              user: "root",
              host: "localhost",
              global: false,
            },
          },
        },
                {
                    resolve: "gatsby-remark-embed-gist",
                    options: {
                      username: 'MertcanAkardere',
                      includeDefaultCss: true
                }
              }
            ]
        }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sass'
  ],
}

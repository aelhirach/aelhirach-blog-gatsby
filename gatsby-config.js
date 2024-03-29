'use strict'

const siteConfig = require("./config")
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://aelhirach.me",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

require("dotenv").config({
  path: `.env.${NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://aelhirach.me",
    title: siteConfig.title,
    tagline: siteConfig.tagline,
    description: `EL HIRACH ABDERRAZZAK an IT Engineer working as Mobile Apps & Games Engineer (iOS & Android)!`,
    author: siteConfig.author.name,
    social: {
      twitter: `a_elhirach`,
    },
    contacts: {
      linkedin: siteConfig.author.contacts.linkedin,
      github: siteConfig.author.contacts.github,
      stackoverflow: siteConfig.author.contacts.stackoverflow,
      facebook: siteConfig.author.contacts.facebook,
      twitter: siteConfig.author.contacts.twitter,
    },
    labels: siteConfig.labels,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-PW9KJTC1VN", // Google Analytics / GA
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: 'gatsby-plugin-netlify-cms',
    //   options: {
    //     modulePath: `${__dirname}/src/netlify-cms/index.js`,
    //     enableIdentityWidget: true,
    //     publicPath: 'admin',
    //     htmlTitle: 'Content Manager',
    //     includeRobots: false,
    //   },
    // },
    {
            resolve: `gatsby-plugin-sitemap`,
            options: {
            output: `/sitemap.xml`,
            query: `
                {
                site {
                    siteMetadata {
                        siteUrl
                    }
                }
                allFile(filter: {extension: {eq: "md"}}) {
            edges {
              node {
                sourceInstanceName
                modifiedTime
                relativeDirectory
              }
            }
          }
                allSitePage {
                    edges {
                        node {
                            path
                        }
                    }
                }
            }`,
            serialize: ({ site, allSitePage,allFile }) =>{
            //iterates over the array inside allSite to generate the the sitemap the markdown items will have lower priority
            return allSitePage.edges.map(edge=>{
              const itemPresent= allFile.edges.find(item=>`/${item.node.relativeDirectory}/`===edge.node.path)
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: itemPresent?`weekly`:`daily`, // if any of the markdown (blog/projects) data present set the frequency to weekly otherwise daily
                lastmod:itemPresent?itemPresent.node.modifiedTime.split('T')[0]:new Date().toISOString().split('T')[0], // adds the lastmod entry with a date either parsed or today
                priority:itemPresent?0.6:0.9, //sets the priority based on the markdown(blog/projects) 0.6 if they do, 0.9 otherwise
              }
            })
          }
        }
      },
    {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          resolveEnv: () => NETLIFY_ENV,
          env: {
            production: {
              policy: [{ userAgent: '*' }]
            },
            'branch-deploy': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null
            },
            'deploy-preview': {
              policy: [{ userAgent: '*', disallow: ['/'] }],
              sitemap: null,
              host: null
            }
          }
        }
      },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `media`,
        path: `${__dirname}/static/media`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    },
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
    // {
    //   resolve: 'gatsby-plugin-static-folders',
    //   options: {
    //     folders: [
    //       './static/media'
    //     ]
    //   }
    // },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

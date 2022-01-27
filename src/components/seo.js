import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, image, meta, keywords, title, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({site, openGraphImage}) => {
        const metaDescription = description || site.siteMetadata.description
        const defaultImage = image || openGraphImage?.childImageSharp?.resize
        const metaImage = defaultImage && defaultImage.src ? `${site.siteMetadata.siteUrl}${defaultImage.src}` : null
        const metaUrl = `${site.siteMetadata.siteUrl}${pathname}`
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:creator`,
                content: `@${site.siteMetadata.social.twitter}`,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: 'google-site-verification',
                content: 'Gx7tw5v2_CQE99tM4P-p_u2J6Nikr9p7EoWPBd_1RVA'
              }

            ]
              .concat(metaImage ? [
                {
                  property: `og:image`,
                  content: metaImage
                },
                {
                  property: `og:image:alt`,
                  content: title,
                },
                {
                  property: 'og:image:width',
                  content: defaultImage.width
                },
                {
                  property: 'og:image:height',
                  content: defaultImage.height
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image` ,
                }

              ] : [])
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  pathname: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.object,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
        social {
          twitter
        }
      }
    }
    openGraphImage: file(relativePath: {eq: "open-graph-image.jpg"}) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`

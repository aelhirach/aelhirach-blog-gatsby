import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog-post.css"
import Image from "gatsby-image";
import { constructUrl } from "../utils/urlUtil";
import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"
import CustomShareBlock from "../components/CustomShareBlock"

const BlogPost = (props) => {
  const post = props.data.markdownRemark
  const labels = props.data.site.siteMetadata.labels
  const siteName = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.siteUrl
  const url = `${siteUrl}${props.pageContext.slug}`;
  const tags = post.frontmatter.tags

  const getTechTags = (tags) => {
    const techTags = []
    tags.forEach((tag, i) => {
      labels.forEach((label) => {
        if (tag === label.tag) {
          techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
        }
      })
    })
    return techTags
  }

  return (
    <Layout>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      imageUrl={constructUrl(siteUrl, post.frontmatter.image?.childImageSharp?.fixed?.src)}
      imageAlt={post.frontmatter.imageAlt}
    />
      <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <div className="mt-3">
            <h2 className="heading">{post.frontmatter.title}</h2>
            <div className="d-block">
              {getTechTags(tags)}
            </div>
            <br />
            <small><i>Published on </i> {post.frontmatter.date}</small>
            <br />
            <br />
            {post.frontmatter.image?.childImageSharp?.fluid && (
              <>
                <figure>
                  <Image
                    fluid={post.frontmatter.image.childImageSharp.fluid}
                    alt={post.frontmatter.imageAlt}
                  />
                  <figcaption
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      paddingTop: "8px",
                    }}
                  >
                    <cite
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.imageCaption,
                      }}
                    />
                  </figcaption>
                </figure>
              </>
            )}
            
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <CustomShareBlock title={post.frontmatter.title} siteName={siteName} url={url} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
      site {
        siteMetadata {
          siteUrl
          title
          labels {
              tag
              tech
              name
              size
              color
          }
        }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        image {
          childImageSharp {
            fixed(height: 600, width: 1200) {
              src
            }
            fluid(maxWidth: 700, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost

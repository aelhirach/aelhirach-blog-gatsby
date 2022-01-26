import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog-post.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
  const postImage = post.frontmatter.image ? getImage(post.frontmatter.image.childImageSharp.gatsbyImageData) : null

  const image = post.frontmatter.image ? post.frontmatter.image : null

  return (
    <Layout>
    <SEO title={post.frontmatter.title} description={post.excerpt} image={image} pathname={props.location.pathname} />
    <div className="post-page-main">
        <div className="sidebar px-4 py-2">
          <Sidebar />
        </div>

        <div className="post-main">
          <div className="mt-3">
            <h1 className="heading">{post.frontmatter.title}</h1>
            <div className="d-block">
              {getTechTags(tags)}
            </div>
            <br />
            <small><i>Published on </i> {post.frontmatter.date}</small>
            <br />
            <br />
            {postImage && (
              <>
                <figure>
                  <GatsbyImage image={postImage} alt={post.frontmatter.imageAlt}/>
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
        imageAlt
        image: featured {
          absolutePath
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default BlogPost

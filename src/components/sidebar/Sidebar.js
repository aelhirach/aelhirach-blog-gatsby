import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"

import SocialLinks from "./SocialLinks"
import TechTags from "./TechTags"


const Sidebar = () => {
    return (
        <StaticQuery
            query={graphql`
                query SiteBioQuery {
                    site {
                        siteMetadata {
                            title
                            tagline
                            author
                            contacts {
                                linkedin
                                github
                                stackoverflow
                                facebook
                                twitter
                            }
                            labels {
                                tag
                                tech
                                name
                                size
                                color
                            }
                        }
                    }
                    allMarkdownRemark(
                        limit: 10
                        sort: { fields: [frontmatter___date], order: DESC }
                        filter: { frontmatter: { published: { eq: true } } }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <div className="sidebar-main border-right">
                        <Bio author={data.site.siteMetadata.author} tagline={data.site.siteMetadata.tagline} />
                        <SocialLinks contacts={data.site.siteMetadata.contacts} />
                        <div className="page-links">
                            <Link to="/"><span className="link d-block py-1">Blog Home</span></Link>
                            <Link to="/about"><span className="link d-block py-1">About</span></Link>
                            <a href="mailto:elhirach.abderrazzak@gmail.com?subject=Hello from your website"><span className="link d-block py-1">Get in touch</span></a>

                        </div>
                        <div className=" tech-tags mt-4">
                            <div class="divider"></div>
                             <br/>
                            <TechTags labels={data.site.siteMetadata.labels} posts={data.allMarkdownRemark.edges} />
                        </div>
                    </div>
                </>
            )}
        />
    )

export default Sidebar

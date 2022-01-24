import React from "react"
import "./sidebar.css"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-60">

            <StaticImage style={{ maxWidth: `18vw` }} className="profile-img" src="../../images/aelhirach.jpg" alt="" />

            <h1 className="mt-2 author-bio">{author}</h1>
            <small className="text-normal tagline">{tagline} <Link to="/about"><span className="text-bold">More.</span></Link></small>
        </div>
    )
}

export default Bio

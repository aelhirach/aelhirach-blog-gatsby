import React from "react"
import "./sidebar.css"
import { Link } from "gatsby"
import aelhirach from "../../images/aelhirach.jpg"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-60">
            <img  src={aelhirach} style={{ maxWidth: `18vw` }} className="profile-img" alt="" />
            <h1 className="mt-2 author-bio">{author}</h1>
            <small className="text-normal">{tagline} <Link to="/about"><span className="text-bold">More.</span></Link></small>
        </div>
    )
}

export default Bio

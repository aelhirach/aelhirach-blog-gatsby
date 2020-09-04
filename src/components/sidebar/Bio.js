import React from "react"
import "./sidebar.css"
import { Link } from "gatsby"
import willjw3 from "../../images/willjw3.jpg"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={willjw3} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline} <Link to="/about"><span className="text-dark d-block py-1">More</span></Link></small>

        </div>
    )
}

export default Bio

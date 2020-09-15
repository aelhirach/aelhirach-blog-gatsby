import React from "react"
import { Link } from "gatsby"
import "./header.css"
import aelhirach from "../../images/aelhirach.jpg"

const MobileBio = (props) => {

    return (
        <div className="mobile-bio-main" >
            <img src={aelhirach}  className="ml-4 mt-2" style={{ maxWidth: `150px`, maxHeight: `150px`, borderRadius: `50%`,boxShadow: `1px 1px 3px`}} alt="author-pic" />
            <div className="mr-4 mt-2" style={{marginLeft: 20}}>
                <h4 >{props.author}</h4>
                <small className="text-normal"> {props.tagline} <Link to="/about"><span className="text-bold">More.</span></Link></small>
            </div>
        </div>
    )
}

export default MobileBio

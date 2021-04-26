import React from "react"
import { Link } from "gatsby"
import "./header.css"

const MobilePages = () => {
    return (
        <div className="mobile-pages-main" >
            <div className="pages-center">
                <Link to="/"><span className="linkStyle d-inline">Blog Home</span></Link>
                <Link to="/about"><span className="linkStyle d-inline">About</span></Link>
                <a href="mailto:elhirach.abderrazzak@gmail.com?subject=Hello from your website"><span className="linkStyle d-inline">Get in touch</span></a>
            </div>
        </div>
    )
}

export default MobilePages

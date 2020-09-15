import React from "react"
import { Link } from "gatsby"
import "./header.css"

const MobilePages = () => {
    return (
        <div className="mobile-pages-main" >
            <div className="text-center">
                <Link to="/"><span className="linkStyle d-inline p-4">Blog Home</span></Link>
                <Link to="/about"><span className="linkStyle d-inline p-4">About</span></Link>
                <a href="mailto:elhirach.abderrazzak@gmail.com?subject=Hello from your website"><span className="linkStyle d-inline p-4">Get in touch</span></a>

            </div>
        </div>
    )
}

export default MobilePages

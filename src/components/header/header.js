
import React from 'react'
import PropTypes from "prop-types"


import MobileSocialLinks from "./MobileSocialLinks"
import MobilePageLinks from "./MobilePageLinks"
import SocialLinks from "./SocialLinks"

import "./header.css"
import { TwitterFollowButton} from 'react-twitter-embed';

import aelhirach from "../../images/aelhirach-small.jpg"


const Header = ({ siteTitle, tagline, author, contacts }) => {

  return (  
    <header
      className="head-main"
      
    >
      <div className="head-elements" style={{  padding: `.75rem` }}>

        <div className="head-logo ml-4" >
                <div>
                    <img style={{ marginRight :`10px`, minWidth: `2vw`, borderRadius: `40%`, boxShadow: `1px 1px 3px`}} src={aelhirach} alt="" />
                </div>
                
                <div className="head-twitter-name" >
                  
                
                      
                      <h4 style={{ margin: '0', padding: `.0rem` , color: 'white'}}>{author}</h4>
                      <small style={{ marginBottom: '8px', padding: `.0rem` , color: 'white'}}>Mobile Engineer</small>
                      
                      
                      <TwitterFollowButton   screenName={'a_elhirach'} />
                  
                </div>
                
        </div>
        
        <SocialLinks contacts={contacts} />
      </div>
      <MobileSocialLinks contacts={contacts} />
      <MobilePageLinks />
  
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

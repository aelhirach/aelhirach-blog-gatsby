
import React from 'react'
import PropTypes from "prop-types"


import MobileSocialLinks from "./MobileSocialLinks"
import MobilePageLinks from "./MobilePageLinks"
import SocialLinks from "./SocialLinks"

import "./header.css"
import { TwitterFollowButton } from 'react-twitter-embed';

import { StaticImage } from "gatsby-plugin-image"


const Header = ({ siteTitle, tagline, author, contacts }) => {

  return (
    <header
      className="head-main"

    >
      <div className="head-elements" style={{  padding: `.75rem` }}>

        <div className="head-logo ml-4" >
                <div>
                    <StaticImage style={{ marginRight :`10px`, minWidth: `2vw`, borderRadius: `40%`, boxShadow: `1px 1px 3px`}} src="../../images/aelhirach-small.jpg" alt="A dinosaur" />
                </div>

                <div className="head-twitter-name" >



                      <h4 style={{ margin: '0', padding: `.0rem` , color: 'white'}}>{author}</h4>
                      <small style={{ marginBottom: '8px', padding: `.0rem` , color: 'white'}}>Web & Mobile Engineer</small>


                      <TwitterFollowButton    options={{ 'showCount': false, size : "large" }} screenName={'a_elhirach'} />


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

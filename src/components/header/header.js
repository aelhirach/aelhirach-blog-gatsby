
import React from 'react'
import PropTypes from "prop-types"


import MobileSocialLinks from "./MobileSocialLinks"
import MobilePageLinks from "./MobilePageLinks"
import SocialLinks from "./SocialLinks"
import MobileBio from "./MobileBio"
import "./header.css"
import { TwitterFollowButton} from 'react-twitter-embed';

import aelhirach from "../../images/aelhirach-small.jpg"
import BuyMeACoffeeButton from "./BuyMeACoffeeButton"

const Header = ({ siteTitle, tagline, author, contacts }) => {

  return (  
    <header
      className="head-main"
      style={{
        background: `#26293b`
      }}
    >
      <div className="head-elements" style={{  margin: `0`, padding: `.75rem` }}>

        <div className="head-logo ml-4" >
                <img style={{ marginRight :`10px`, maxWidth: `10vw`, maxHeight: `12vw`, minWidth: `4vw`, borderRadius: `40%`, boxShadow: `1px 1px 3px`}} src={aelhirach} alt="" />
                <div className="head-twitter-buymeacoffe" >
                  <TwitterFollowButton   screenName={'a_elhirach'} />
                  <BuyMeACoffeeButton />
                </div>
        </div>

        <SocialLinks contacts={contacts} />
      </div>
      <MobileSocialLinks contacts={contacts} />
      <MobilePageLinks />
      <MobileBio author={author} tagline={tagline} />
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

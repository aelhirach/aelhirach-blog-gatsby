import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaFacebook,
    FaTwitterSquare
} from "react-icons/fa"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            <a className="text-primary ml-4"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={30}  />
                </span>
            </a>
            <a className="text-light ml-4"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={30}  />
                </span>
            </a>
            <a className="text-warning ml-4"
                href={contacts.stackoverflow}>
                <span title="Stack Overflow">
                    <FaStackOverflow size={30}  />
                </span>
            </a>
            <a className="text-light ml-4"
                href={contacts.facebook}>
                <span title="Facebook">
                    <FaFacebook size={30}  />
                </span>
            </a>
            <a className="text-info ml-4"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={30} style={{ color: "info" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks

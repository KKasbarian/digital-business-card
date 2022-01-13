import React from "react";
import linkedinIcon from '../images/linkedin-icon.svg'
import twitterIcon from '../images/twitter-icon.svg'
import instagramIcon from '../images/instagram-icon.svg'
import githubIcon from '../images/github-icon.svg'

function Footer() {
    return(
        <footer className="footer">
            <ul>
                <li><a href="https://www.linkedin.com/in/kkasbarian/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn Link" /></a></li>
                <li><a href="https://twitter.com/kkasbarian99/" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter Link" /></a></li>
                <li><a href="https://www.instagram.com/kkasbarian99/" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="Instagram Link" /></a></li>
                <li><a href="https://github.com/KKasbarian/" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub Link" /></a></li>
            </ul>
        </footer>
    )
}

export default Footer
import React from "react";
import profilePic from '../images/profile-pic.jpg'
import emailPic from '../images/email-icon.png'
import linkedinPic from '../images/linkedin-icon.png'

function Info() {
    return(
        <div className="info-section">
            <div className="profile-container">
                <img src={profilePic} alt="Profile pic" />
            </div>
            <div className="info-content">
                <h2 className="person-name">Kourken Kasbarian</h2>
                <h3 className="person-title">Front-End Developer</h3>
                <p className="person-website"><a href="https://kkasbarian.com" target="_blank" rel="noreferrer">kkasbarian.com</a></p>
                <div className="social-buttons-container">
                    <a href="mailto:no-reply@gmail.com" className="email-btn"><img src={emailPic} alt="Email icon" /><span className="btn-text">Email</span></a>
                    <a href="https://www.linkedin.com/in/kkasbarian/" target="_blank"  rel="noreferrer" className="linkedin-btn"><img src={linkedinPic} alt="Linkedin icon" /><span className="btn-text">LinkedIn</span></a>
                </div>
            </div>
        </div>
    )
}

export default Info
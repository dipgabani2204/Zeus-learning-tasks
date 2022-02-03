import React from "react";
import emailIcon from "../images/Icon.png"
import linkdinIcon from "../images/Vector.png"

export default function MainContent() {
    return (
        <div className="main">
            <h2>Laura Smith</h2>
            <h5>Frontend Developer</h5>
            <h6>laurasmith.website</h6>

            <div className="btns">
                <button className="email-btn">
                    <div className="email-div">
                        <img src={emailIcon} />
                        <span>Email</span>
                    </div>
                </button>
                <button className="lnk-btn">
                    <div className="lnk-div">
                        <img src={linkdinIcon} />
                        <span>LinkedIn</span>
                    </div>
                </button>
            </div>

            <div className="about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>

            <div className="about">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>

        </div>
    )
}
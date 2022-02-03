import React from "react";
import fbIcom from "../images/Facebook Icon.png"
import gitIcon from "../images/GitHub Icon.png"
import instaIcom from "../images/Instagram Icon.png"
import twitterIcom from "../images/Twitter Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <img src={twitterIcom} />
            </div>
            <div>
                <img src={instaIcom} />
            </div>
            <div>
                <img src={fbIcom} />
            </div>
            <div>
                <img src={gitIcon} />
            </div>
        </div>
    )
}
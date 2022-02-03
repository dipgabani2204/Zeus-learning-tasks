import React from "react";
import profileimg from "../images/profile-img.png";

export default function Profile()
{
    return(
        <div className="profile">
            <img src = {profileimg}/>
        </div>
    )
}
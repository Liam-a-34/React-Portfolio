import React from "react";
import avatar from "../assets/myAvatar.png";
import "../assets/index.css"

function About(){
    return(
        <div className="about">
            <img className="profile-pic" src={avatar}/>
            <h4 className="name-header">I'm Liam Allen.</h4>
            <p>I am a <span className="white-span">Nashville</span> based <span className="white-span">Junior Developer</span>, prioritizing front end, and UI development. I'm 20 years old, and excited for my future in this field. Growing up on a farm isn't necessarily what you'd imagine for a developer, but I believe it's helped shape my work ethic, and determination to do things right. It's nice to meet you, I hope you enjoy my portfolio!</p>
        </div>
    )
}

export default About;
import React from "react";
import "./assets/index.css";
import githubLogo from "./assets/github.png";
import linkedinLogo from "./assets/linkedin.png";
import stackLogo from "./assets/stack-overflow.png";

function Footer(){
    return(
        <footer>
        <a href="https://github.com/Liam-a-34" target="_blank"><img src={githubLogo}/></a>
        <a href="https://www.linkedin.com/in/liam-allen-a4a413259/" target="_blank"><img src={linkedinLogo}/></a>
        <a href="https://stackoverflow.com/users/19978577/liam-allen" target="_blank"><img src={stackLogo}/></a>
      </footer>
    );
}

export default Footer;
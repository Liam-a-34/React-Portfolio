import React from "react"
import PDF from "../assets/resume.pdf"

function Resume(){
   return(
    <div className="resume">
          <h2>Feel free to check out some of my past experience, and current proficiencies!</h2>
          <a href={PDF} download="Liam_A_Resume">→ Download My Resume ←</a>
        <div className="proficiencies">
          <div>
          <h3>Front End Proficiencies</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Jquery</li>
              <li>SASS/SCSS</li>
              <li>Web Design</li>
              <li>Debugging</li>
            </ul>
          </div>
          <div>
            <h3>Back End Proficiencies</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
              </ul>
          </div>
          <div>
            <h3>Other Attributes</h3>
            <ul>
              <li>Fast Learner</li>
              <li>Detail Oriented</li>
              <li>Solo/Group Capable</li>
              <li>Work Ethic</li>
              <li>Life Experience</li>
              <li>Drive to Succeed</li>
              <li>Young & Moldable</li>
              <li>Bootcamp Grad</li>
            </ul>
          </div>
        </div>
      </div>
   ) 
}

export default Resume;
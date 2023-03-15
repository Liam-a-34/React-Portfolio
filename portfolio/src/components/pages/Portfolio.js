import React from "react";

import KRN from "../assets/krn-image.png";
import Defuser from "../assets/defuser.PNG";
import Jate from "../assets/jate.PNG";
import KachowDown from "../assets/kachow-down.PNG";
import Weather from "../assets/weather.PNG";
import NoteTaker from "../assets/note-taker.PNG";
import Icon from "../assets/github.png"

export default function Portfolio() {
    const projects = [
        {
            name: "KRN Fitness",
            image: KRN,
            url: "https://pacific-sierra-02565.herokuapp.com/",
            description: "Full Stack",
            repo: "https://github.com/devkjoon/krn",
        },
        {
            name: "Kachow Down Delivery",
            image: KachowDown,
            url: "https://liam-a-34.github.io/Kachow-Down-Delivery/",
            description: "HTML, CSS, JS",
            repo: "https://github.com/Liam-a-34/Kachow-Down-Delivery",
        },
        {
            name: "Bomb Defuser",
            image: Defuser,
            url: "https://liam-a-34.github.io/Bomb-Defuser/",
            description: "HTML, CSS, JS",
            repo: "https://github.com/Liam-a-34/Bomb-Defuser",
        },
        {
            name: "Jate",
            image: Jate,
            url: "https://thawing-earth-15560.herokuapp.com/",
            description: "Full Stack",
            repo: "https://github.com/Liam-a-34/Text-Editor",
        },
        {
            name: "Weather Forecaster",
            image: Weather,
            url: "https://liam-a-34.github.io/Weather-forecast-app/",
            description: "HTML, CSS, JS",
            repo: "https://github.com/Liam-a-34/Weather-forecast-app",
        },
        {
            name: "Note Taker",
            image: NoteTaker,
            url: "https://evening-stream-08907.herokuapp.com/",
            description: "HTML, CSS, JS",
            repo: "https://github.com/Liam-a-34/Note-Taking-App",
        },
    ];

    return(
    <div className="projects-div">
        <h2>Check out some of my work!</h2>
      <div className="projects"> 
        {projects.map((project) => {
            return(
        <div key={project.name} className="project-container">
            <img className="project-image" src={project.image}/>
            <div className="project-links">
              <a className="project-name" href={project.url}>{project.name}</a>
              <a href={project.repo}><img className="project-icon" src={Icon}/></a>
              <p className="project-description">-{project.description}-</p>
            </div>
        </div>
            )
        })}
    </div>
    </div>
    )

}

import React from "react";

import KRN from "../assets/krn-image.png";
import Defuser from "../assets/defuser.PNG";
import furbnb from "../assets/furbnbscreenshot.PNG";
import KachowDown from "../assets/kachow-down.PNG";
import Weather from "../assets/weather.PNG";
import CoffeeMaker from "../assets/coffee-maker.PNG";
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
            name: "furbnb",
            image: furbnb,
            url: "https://furbnbcare.herokuapp.com/",
            description: "Full Stack",
            repo: "https://github.com/devkjoon/furbnb",
        },
        {
            name: "Weather Forecaster",
            image: Weather,
            url: "https://liam-a-34.github.io/Weather-forecast-app/",
            description: "HTML, CSS, JS",
            repo: "https://github.com/Liam-a-34/Weather-forecast-app",
        },
        {
            name: "Coffee Maker",
            image: CoffeeMaker,
            url: "https://liam-a-34.github.io/Coffee-Maker/",
            description: "HTML, CSS, JS",
            repo: "https://github.com/Liam-a-34/Coffee-Maker",
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

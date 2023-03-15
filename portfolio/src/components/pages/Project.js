import React from "react";

function Project(props){
    const { name, description, image, url, repo } = props;

    return(
      <div className="project-container">
        <img className="project-image" src={image}/>
        <div className="project-links">
          <a className="project-name"  href={url}>{name}</a>
          <a href={repo}><img className="project-icon" src="../src/components/assets/github.png"/></a>
          <p className="project-description">-{description}-</p>
        </div>
      </div> 
    )
}

export default Project
import React, { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectItem.css";

function ProjectItem(props) {
    return(
            <div className={props.className}>
                <img alt="portfolioItem" src={props.image} />
                <button data-toggle="modal" data-target={"#" + props.id.toString()} >Learn  More</button>
                <ProjectModal 
                    key={props.title}
                    id={props.id}
                    title={props.title}
                    technologies={props.technologies}
                    description={props.description}
                    image={props.image}
                    mock={props.mock}
                    github={props.github}
                    deployed={props.deployed}
                />
            </div>
    )
}

export default ProjectItem;
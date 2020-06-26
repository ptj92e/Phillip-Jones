import React from "react";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import data from "../utils/data.json";
import "./css/Projects.css";

function Projects() {
    return (
        <div id="projects">
            <div id="projectContent">
                <h1>Projects</h1>
                <hr />
                <div id="projectCards">
                    {data.projects.map(project => (
                        <ProjectItem
                            className="projectItem"
                            key={project.title}
                            id={project.id}
                            title={project.title}
                            technologies={project.technologies}
                            description={project.description}
                            image={project.image}
                            mock={project.mock}
                            github={project.github}
                            deployed={project.deployed}
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;
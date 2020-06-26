import React from "react";
import "./ProjectItem.css";

function ProjectItem(props) {
    const styles = {
        image: {
            backgroundImage: "url(" +props.image + ")",
            backgroundSize: "cover"
        }
    }
    return(
            <div style={ styles.image } className={props.className}>
                <h3>props.title</h3>
            </div>
    )
}

export default ProjectItem;
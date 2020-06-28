import React from "react";
import "./ProjectModal.css";

function ProjectModal(props) {
    return (
        <div className="modal fade projectModal" id={props.id.toString()} tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img className="projectMock" alt="projectMock" src={props.mock} />
                        <p>Technologies: {props.technologies}</p>
                        <p>Description: {props.description}</p>
                        <div classNameName="row">
                            <a target="_blank" rel="noopener noreferrer" href={props.github}>Github</a>
                            <a target="_blank" rel="noopener noreferrer" href={props.deployed}>Deployed</a>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="closeButton" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;
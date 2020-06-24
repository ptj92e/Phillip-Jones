import React from "react";
import "./Navbar.css";

function Navbar() {
    return(
        <nav id="navbar">
            <div id="nav-links">
                <a className="link active" id="landingLink" href="/#landing">Home</a>
                <a className="link" id="aboutLink" href="/#about">About</a>
                <a className="link" id="projectsLink" href="/#projects">Projects</a>
                <a className="link" id="contactLink" href="/#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;
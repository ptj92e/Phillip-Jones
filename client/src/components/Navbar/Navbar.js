import React from "react";
import "./Navbar.css";

function Navbar() {
    return(
        <nav id="navbar">
            <a className="link" id="landingLink" href="/#landing">Home</a>
            <a className="link" id="aboutLink" href="/#about">About</a>
            <a className="link" id="projectsLink" href="/#projects">Projects</a>
            <a className="link" id="contactLink" href="/#contact">Contact</a>
        </nav>
    )
}

export default Navbar;
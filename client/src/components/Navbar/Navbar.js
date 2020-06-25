import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./Navbar.css";

function Navbar() {
    return(
        <nav id="navbar">
            <div id="nav-links">
                <Controller>
                    <Scene duration={window.innerHeight} classToggle="active" triggerElement="#landing" indicators={false}>
                        {(progress, event) => (
                            <a className="link" id="landingLink" href="/#landing">Home</a>
                        )}
                    </Scene>
                    <Scene duration={window.innerHeight} classToggle="active" triggerElement="#about" indicators={false}>
                        {(progress, event) => (
                            <a className="link" id="aboutLink" href="/#about">About</a>
                        )}
                    </Scene>
                    <Scene duration={window.innerHeight} classToggle="active" triggerElement="#projects" indicators={false}>
                        {(progress, event) => (
                            <a className="link" id="projectsLink" href="/#projects">Projects</a>
                        )}
                    </Scene>
                    <Scene duration={window.innerHeight} classToggle="active" triggerElement="#contact" indicators={false}>
                        {(progress, event) => (
                            <a className="link" id="contactLink" href="/#contact">Contact</a>
                        )}
                    </Scene>
                </Controller>
            </div>
        </nav>
    )
}

export default Navbar;
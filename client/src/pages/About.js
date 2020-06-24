import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Bio from "../components/Bio/Bio";
import "./css/About.css";

function About() {
    return(
        <div id="about">
            <div id="aboutContent">
                <h1>About Me</h1>
                <hr/>
                <AboutMe />
                <Bio />
            </div>
        </div>
    )
}

export default About;
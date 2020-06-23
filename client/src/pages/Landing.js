import React from "react";
import "./css/Landing.css";

function Landing() {
    return(
        <div id="landing">
            <div id="backgroundOverlay">
                <div id="landingContent">
                    <div id="topText">
                        <h1>Hi, I am &nbsp;
                        <h1 id="name">Phillip Jones</h1>.</h1>
                    </div>
                    <h1 id="bottomText">I am a full stack web developer.</h1>
                    <a href="#about">See What I've Done &nbsp; <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Landing;
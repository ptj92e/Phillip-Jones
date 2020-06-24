import React from "react";
import "./AboutMe.css";

function AboutMe() {
    return(
        <div id="aboutMe">
            <div>
                <h1><i class="fas fa-mobile-alt"></i>Design</h1>
                <p>My main goal is to provide mobile first experiences to my users.</p>
            </div>
            <div>
                <h1><i class="fas fa-laptop-code"></i>Code</h1>
                <p>Clean, reusable code is something that I strive for with all of my projects.</p>
            </div>
            <div>
                <h1><i class="fas fa-server"></i>Technologies</h1>
                <p>My favorite technologies to work with include React, CSS, and Node.</p>
            </div>
        </div>
    )
}

export default AboutMe;
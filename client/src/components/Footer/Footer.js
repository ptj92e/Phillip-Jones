import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <footer>
            <a id="topLink" href="/#landing"><i className="fas fa-arrow-circle-up"/></a>
            <div id="socialDiv">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/p-jones92"><i className="fab fa-linkedin"></i></a>
                <a id="resume" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1w986VtOVbPJq7OfwunDdB7Phe3j6Xeg22XjMgksMvZw/edit?usp=sharing">Resume</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ptj92e"><i className="fab fa-github"></i></a>
            </div>
            <p>Phillip Jones © 2020</p>
        </footer>
    )
}

export default Footer;
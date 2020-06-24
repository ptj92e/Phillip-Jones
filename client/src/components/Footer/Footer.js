import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <footer>
            <a id="topLink" href="/#landing"><i class="fas fa-arrow-circle-up"/></a>
            <div id="socialDiv">
                <a target="_blank" href="https://www.linkedin.com/in/p-jones92"><i class="fab fa-linkedin"></i></a>
                <a target="_blank" href="https://github.com/ptj92e"><i class="fab fa-github"></i></a>
                <a target="_blank" href="https://docs.google.com/document/d/1w986VtOVbPJq7OfwunDdB7Phe3j6Xeg22XjMgksMvZw/edit?usp=sharing"><i class="fas fa-file-alt"></i></a>
            </div>
            <p>Phillip Jones © 2020</p>
        </footer>
    )
}

export default Footer;
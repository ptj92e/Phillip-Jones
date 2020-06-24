import React, { useRef, useState } from "react";
import "./ContactForm.css";

function ContactForm() {
    let nameRef = useRef();
    let emailRef = useRef();
    let messageRef = useRef();

    return(
        <div id="contactForm">
            <div>
                <h1>Contact</h1>
                <hr/>
                <p>Want to work together?</p>
                <form>
                    <input ref={nameRef} type="text" placeholder="Name"/>
                    <input ref={emailRef} type="text" placeholder="E-Mail"/>
                    <textarea ref={messageRef} placeholder="Message:"/>
                    <button id="input" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
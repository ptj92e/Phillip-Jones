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
                <p>Want to work together? Fill out this form or email me directly at: ptj92e@gmail.com</p>
                <form>
                    <input ref={nameRef} type="text" placeholder="Name"/>
                    <input ref={emailRef} type="text" placeholder="E-Mail"/>
                    <textarea ref={messageRef} placeholder="Message:"/>
                    <div id="buttonDiv">
                        <button id="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
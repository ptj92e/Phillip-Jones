import React, { useRef, useState } from "react";
import API from "../../utils/API";
import "./ContactForm.css";

function ContactForm() {
    let nameRef = useRef();
    let emailRef = useRef();
    let messageRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        API.sendEmail({
            fullName: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }).then(() => {
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        }).then(() => {
            alert("Your message has been sent.");
        }).catch(err => console.log(err));
    };

    return(
        <div id="contactForm">
            <div>
                <h1>Contact</h1>
                <hr/>
                <p>Want to work together? Fill out this form or email me directly at: ptj92e@gmail.com</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        ref={nameRef} 
                        type="text" 
                        required
                        placeholder="Name"/>
                    <input 
                        ref={emailRef} 
                        type="text" 
                        required
                        placeholder="E-Mail"/>
                    <textarea 
                        ref={messageRef} 
                        required
                        placeholder="Message:"/>
                    <div id="buttonDiv">
                        <button id="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
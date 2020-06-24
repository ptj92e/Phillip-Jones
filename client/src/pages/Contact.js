import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import "./css/Contact.css";

function Contact() {
    return(
        <div id="contact">
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;
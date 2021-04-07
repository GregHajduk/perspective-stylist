import React from "react";
import ContactForm from "../components/ContactForm";
import PageMargin from "../components/PageMargin";
import Title from "../components/Title";

function Contact() {
    return (
        <PageMargin>
        <Title title="contact" />
        <ContactForm />
        </PageMargin>
    );
}

export default Contact;

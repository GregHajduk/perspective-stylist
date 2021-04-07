import React from "react";
import emailjs from "emailjs";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <article className="contact">
      <form className="contact__form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label className="contact__label">Name</label>
        <input className="contact__input" type="text" name="user_name" />
        <label className="contact__label">Email</label>
        <br />
        <input className="contact__input" type="email" name="user_email" />
        <label className="contact__label">Message</label>
        <textarea className="contact__input" name="message" />
        <input className="contact__btn" type="submit" value="Send" />
      </form>
    </article>
  );
}

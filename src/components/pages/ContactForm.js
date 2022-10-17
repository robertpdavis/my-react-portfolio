import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import BSmodal from '../BSmodal';

export default function ContactForm() {

  const [modalShow, setModalSHow] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  const resetModalShow = () => {
    setModalSHow(false);
  }

  function sendEmail(e) {
    e.preventDefault();

    console.log(process.env.CONTACT_FORM_KEY)

    emailjs.sendForm('YOUR_SERVICE', 'YOUR_TEMPLATE', e.target, 'YOUR_ID')

      .then((result) => {
        setFormStatus(true);
        setModalSHow(true);
      }, (error) => {
        setFormStatus(false);
        setModalSHow(true);
      });

  }

  return (
    <section className="section page" id="contact">
      <form className="form" onSubmit={sendEmail}>
        <label htmlFor="from_name">Name</label>
        <input type="text" name="from_name" required />
        <label htmlFor="from_email">Email</label>
        <input type="email" name="from_email" required />
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" />
        <label htmlFor="html_message">Message</label>
        <textarea name="html_message" />
        <input type="submit" value="Send" />
      </form>
      ✉ Email: <a href="mailto:robertpdavis@optusnet.com.au">robertpdavis@optusnet.com.au</a>
      <BSmodal project="" show={modalShow} contactFormStatus={formStatus} resetModalShow={resetModalShow} />
    </section>
  );
}

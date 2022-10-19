import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import BSmodal from '../BSmodal';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {

  const [modalShow, setModalSHow] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  const resetModalShow = () => {
    setModalSHow(false);
  }

  function onCaptcha(value) {
    //To DO
  }

  function sendEmail(e) {
    e.preventDefault();

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
        <div className="mt-3 mb-3">
          <ReCAPTCHA
            sitekey="6Lckt40iAAAAAIWmLfe2_zj7TECsaL6-0lU8CRIh"
            onChange={onCaptcha}
          />
        </div>
        <input type="submit" value="Send" />
      </form>
      ✉ Email: <a href="mailto:robertpdavis@optusnet.com.au">robertpdavis@optusnet.com.au</a>
      <BSmodal project="" show={modalShow} contactFormStatus={formStatus} resetModalShow={resetModalShow} />
    </section>
  );
}

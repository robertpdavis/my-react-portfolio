import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <section className="section">
        <h2>Rob Davis Full Stack Developer</h2>
        <section className="contact" id="contact-me">
          <div className="contact-item">
            ☏ Phone: 0402 101 333
          </div>
          <div className="contact-item">
            ✉ Email: <a href="mailto:robertpdavis@optusnet.com.au">robertpdavis@optusnet.com.au</a>
          </div>
          <div className="contact-item">
            <a href="https://linkedin.com/in/robdavisaus" target="_blank">LinkedIn</a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/robertpdavis" target="_blank">Github</a>
          </div>
          <div className="contact-item">
            <a href="./public/docs/resume.pdf" target="_blank">My Resume</a>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;

import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer>
      <section class="section">
        <h2>Rob Davis Full Stack Developer</h2>
        <section class="contact" id="contact-me">
          <div class="contact-item">
            ☏ Phone: 0402 101 333
          </div>
          <div class="contact-item">
            ✉ Email: <a href="mailto:robertpdavis@optusnet.com.au">robertpdavis@optusnet.com.au</a>
          </div>
          <div class="contact-item">
            <a href="https://linkedin.com/in/robdavisaus" target="_blank">LinkedIn</a>
          </div>
          <div class="contact-item">
            <a href="https://github.com/robertpdavis" target="_blank">Github</a>
          </div>
          <div class="contact-item">
            <a href="./public/docs/resume.pdf" target="_blank">My Resume</a>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;

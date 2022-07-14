import React from 'react';
import '../app.css';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedIn.png';

function Footer() {
  return (
    <footer>
      <section className="contact">
        <div className="contact-item">
          <a href="https://github.com/robertpdavis" target="_blank" rel="noreferrer"><img src={github} alt="Guthub" /></a>
          <a href="https://linkedin.com/in/robdavisaus" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="./public/docs/resume.pdf" target="_blank">My Resume</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

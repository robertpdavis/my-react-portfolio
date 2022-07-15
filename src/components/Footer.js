import React from 'react';
import '../app.css';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedIn.png';
import stack from '../assets/images/stackoverflow.png';

function Footer() {
  return (
    <footer>
      <section className="profile-links">
        <a href="https://github.com/robertpdavis" target="_blank" rel="noreferrer"><img src={github} alt="Guthub" /></a>
        <a href="https://linkedin.com/in/robdavisaus" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://stackoverflow.com/users/18016811/rob-davis" target="_blank" rel="noreferrer"><img src={stack} alt="Stackoverflow" /></a>
      </section>
    </footer>
  );
}

export default Footer;

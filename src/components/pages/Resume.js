import React from 'react';
import '../../app.css';
import resume from '../../assets/docs/resume.pdf';

export default function Resume() {
  return (
    <section className="section page resume" id="resume">
      <h4>Download My <a href={resume}>Resume</a></h4>
      <h5>Front-End Proficiencies</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>Responisive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h5>Back-End Proficiencies</h5>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL - Sequalize</li>
        <li>MongoDB - Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

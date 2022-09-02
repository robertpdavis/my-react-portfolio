import React from 'react';
import '../../app.css';
import resume from '../../assets/docs/resume.pdf';

export default function Resume() {
  return (
    <section className="container section page resume" id="resume">
      <div className="row">
        <h4>Download My <a href={resume}>Resume</a></h4>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4">
          <h5>Front-End Proficiencies</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3/Bootstrap</li>
            <li>JavaScript ES6+</li>
            <li>JQuery</li>
            <li>Responisive Design</li>
            <li>React</li>
            <li>GraphQL (Apollo Client)</li>
            <li>Visual Basic</li>
          </ul>
        </div>
        <div className="col-12 col-lg-4">
          <h5>Back-End Proficiencies</h5>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>Handlebars</li>
            <li>MySQL - Sequalize</li>
            <li>MongoDB - Mongoose</li>
            <li>REST</li>
            <li>GraphQL (Apollo Server)</li>
            <li>PHP</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="col-12 col-lg-4">
          <h5>Applications</h5>
          <ul>
            <li>Github</li>
            <li>MS Windows & Office suite/Visio (VBA)</li>
            <li>Google products</li>
            <li>Visual Studio / Cod</li>
            <li>Insomnia</li>
            <li>MongoDB (Atlas & Compass)</li>
            <li>AWS (management console/CLI)</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

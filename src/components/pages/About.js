import React from 'react';
import profpict from '../../assets/images/me_profile.jpg';
import '../../App.css';

export default function About() {
  return (
    <section className="section page" id="about-me">
      <section className="profile">
        <figure className="profile-image">
          <img src={profpict} alt="Me" />
        </figure>
        <article>
          <p>
            Full stack web developer and IT professional who has recently earned a certificate in Full Stack Web Development from the
            University of Sydney Coding Boot Camp.
          </p>
          <p>
            Proficient in HTML, CSS, Javascript & Typescrypt, PHP, Visual Basic, MySQL and MongoDB databases, REST and GraphQL APIs.
          </p>
          <p>
            Diverse background in technical, telecommunications, marketing, body corporate and other business management related roles.
            A qualified electrical and IT network engineer, project manager (Agile - Scrum) and product manager with strong interpersonal skills and attention to detail.
          </p>
          <p>
            A well respected team player who leads by example and works well under pressure with a proven ability to deliver technical projects that meet
            customer expectations and achieve business objectives
          </p>
          <p>
            Suited to roles in operational and project teams with a strong internal and external customer management and relationship focus.
          </p>
          <p>
            Currently working on a React/Node project using MongoDB with Hosting on AWS EC2. Open to opportunities.
          </p>
        </article>
      </section>
    </section>
  );
}

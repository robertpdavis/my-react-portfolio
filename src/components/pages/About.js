import React from 'react';
import profpict from '../../assets/images/me_profile.jpg';
import '../../App.css';

console.log('here', process.env.EMAIL_PASS)

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
            University of Sydney Coding Boot Camp and is excited about a career in the web development space.
          </p>
          <p>
            Diverse background in technical, telecommunications, marketing, body corporate and other business management related roles.
            A qualified electrical and IT network engineer, project manager and product manager with strong interpersonal skills and attention to detail.
          </p>
          <p>
            A well respected team player who leads by example and works well under pressure with a proven ability to deliver technical projects that meet
            customer expectations and achieve business objectives
          </p>
          <p>
            Suited to roles in operational and project teams with a strong internal and external customer management and relationship focus.
          </p>
        </article>
      </section>
    </section>
  );
}

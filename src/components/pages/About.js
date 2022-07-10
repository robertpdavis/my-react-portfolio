import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <section className="section" id="about-me">
      <h2>About Me</h2>
      <section className="profile">
        <figure className="profile-image">
          <img src="./public/images/me_profile.jpg" alt="Profile picture" />
        </figure>
        <article>
          <p>
            Full stack software developer and career professional with extensive operational, engineering,
            project management, commercial,
            business management and . relationship capabilities.
          </p>
          <p>
            A well respected team player that leads by example with a proven ability to deliver customer
            requirements and business objectives.
          </p>
          <p>
            Excellent customer relationship and experience management across executive, business and
            consumer .s.
          </p>
          <p>
            The capabilities I have gained throughout my career allows me to bring to life .'s
            expectations across the full stack web development process.
          </p>
          <p>
            From inital concept design and creation of user stories and acceptance criteria, to implementing
            the . side user exerience and server functionality.
          </p>
          <p>
            I have a passion for web development and seeing projects through to a successful completion.
          </p>
        </article>
      </section>
    </section>
  );
}

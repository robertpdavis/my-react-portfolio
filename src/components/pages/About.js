import React from 'react';
import profpict from '../../assets/images/me_profile.jpg';
import '../../app.css';

export default function About() {
  return (
    <section className="section page" id="about-me">
      <section className="profile">
        <figure className="profile-image">
          <img src={profpict} alt="Me" />
        </figure>
        <article>
          <p>
            Full stack software developer and career professional with extensive operational, engineering,
            project management, commercial, business management and client relationship capabilities.
          </p>
          <p>
            A well respected team player that leads by example with a proven ability to deliver customer
            requirements and business objectives.
          </p>
          <p>
            Excellent customer relationship and experience management across executive, business and
            consumer clients.
          </p>
          <p>
            The capabilities I have gained throughout my career allows me to bring to life client's
            expectations across the full stack web development process.
          </p>
          <p>
            From inital concept design and creation of user stories and acceptance criteria, to implementing
            the client side user exerience and server functionality.
          </p>
          <p>
            I have a passion for web development and seeing projects through to a successful completion.
          </p>
        </article>
      </section>
    </section>
  );
}

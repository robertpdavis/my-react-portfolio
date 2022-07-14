import React from 'react';
import '../app.css';

export default function Project(project) {
  const showcase = `showcase-${project.item}`;
  return (
    <figure className="item" id={showcase} key={project.item}>
      <img src={project.image} alt={project.alt} id={showcase} />
      <div className="label" id={showcase}>
        <h4 id={showcase}>{project.name}</h4>
        <span className="label-text" id={showcase}>{project.shortDesc}</span>
      </div>
    </figure >
  );
}


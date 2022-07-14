import React from 'react';
import '../app.css';

export default function Modal(projects) {

  const options = [];

  if (projects.website != "") {
    options.push(<div><p>{projects.desc}</p><p>Click on the link below to go to the website.</p><a href={projects.website} target="_blank" >Go to Website</a></div>)
  } else {
    options.push(<div><p>{projects.desc}</p></div>)
  }

  if (projects.github != "") {
    options.push(<div><a href={projects.github} target="_blank"> Github</a></div>)
  }

  return (
    <div className="modal fade" id="bsmodal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="modal-title">Project: <span className="title-desc">{projects.name}</span></h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" id="modal-body">{options[0]}{options[1]}</div>
          <div className="modal-footer">
            <span>{options[2]}</span>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
              id="modal-close-btn">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}


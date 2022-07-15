import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../app.css';

export default function BSmodal(props) {

  const handleClose = () => {
    props.resetModalShow();
  }

  const options = [];

  if (props.project) {

    options.push(<span className="title-desc">{props.project.name}</span>);

    if (props.project.website !== "") {
      options.push(<div><p>{props.project.desc}</p><p>Click on the link below to go to the website.</p><a href={props.project.website} target="_blank" rel="noreferrer">Go to Website</a></div>)
    } else {
      options.push(<div><p>{props.project.desc}</p></div>)
    }

    if (props.project.github !== "") {
      options.push(<div><a href={props.project.github} target="_blank" rel="noreferrer"> Github</a></div>)
    }
  }
  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Project: {options[0]}</Modal.Title>
        </Modal.Header>
        <Modal.Body >{options[1]}{options[2]}</Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
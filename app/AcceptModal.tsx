import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface ChildProps {
    show: boolean;
    onHide: any;
  }

const AcceptModal= ({show, onHide}: ChildProps ) => {
  return (
    <Modal
      show={show}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Yay! <span>Add your name to the list</span></h2>
        <input type="text" />
      </Modal.Body>
      <Modal.Footer>
        <button className='myBtn' onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default AcceptModal
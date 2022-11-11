import React from 'react'
import Modal from 'react-bootstrap/Modal';

interface ChildProps {
    show: boolean;
    onHide: any;
  }

const RejectModal = ({show, onHide}: ChildProps ) => {
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
        <h4>No problem, see you next time</h4>
        <input type="text" />
      </Modal.Body>
      <Modal.Footer>
        <button className='myBtn' onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default RejectModal
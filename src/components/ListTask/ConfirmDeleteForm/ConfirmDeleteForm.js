import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {deletePost} from '../../../actions/actions'

const ConfirmForm = ({ index }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClose = () => setIsShown(false);
  const handleShow = () => setIsShown(true);
  const dispatch = useDispatch();

  const handleCloseSave = () => {
    dispatch(deletePost(index));
    setIsShown(false);
  }

  return (
    <>
      <Button size="sm" variant="warning" onClick={handleShow}>
        Delete
        </Button>

      <Modal show={isShown} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Warning message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleCloseSave}>
            Delete
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ConfirmForm;
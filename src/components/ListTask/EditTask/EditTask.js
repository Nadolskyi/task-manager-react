import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../../../actions/actions';

const EditTask = ({ task, index }) => {
  const [isShown, setIsShown] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const [isDone, setIsDone] = useState(task.isDone);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTaskText(event.target.value);
  }

  const handleClose = () => {
    setIsShown(false);
  }

  const handleShow = () => {
    setIsShown(true);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTask(index, taskText, isDone));
    setIsShown(false);
  }

  const changeStatus = () => {
    setIsDone(!isDone)
  }

  return (
    <>
      <div className="col-sm-4">
        <Button
          onClick={handleShow}
        >
          Edit
        </Button>
      </div>
      <Modal show={isShown} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>React Task Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEdit}>
            <Form.Group>
              <Form.Control
                type="text"
                value={taskText}
                onChange={handleChange}
                placeholder="Edit task"
              >
              </Form.Control>
              <Form.Check
                type="checkbox"
                checked={isDone}
                label={isDone ? "Move to active" : "Checked as done"}
                onChange={changeStatus}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button onClick={handleEdit} className="btn btn-primary">
            Edit
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;
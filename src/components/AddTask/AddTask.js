import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addTask} from '../../actions/actions'

const AddTask = () => {
  const [isShown, setIsShown] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [isDone, setIsDone] = useState(false);
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

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTask(taskText, isDone));
    setIsShown(false);
  }

  const changeStatus = () => {
    setIsDone(!isDone)
  }

  return (
    <div className="row">
      <div className="col-sm-8">
        <h3 className="AddTask-header">React Task Manager</h3>
      </div>
      <div className="col-sm-4">
        <button
          type="button"
          className="btn btn-success AddTask-button"
          onClick={handleShow}
        >
          Add
        </button>
      </div>
      <Modal show={isShown} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>React Task Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={handleChange}
                id="inputTask"
                placeholder="Enter task to add"
              />
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
          <Button onClick={handleAdd} className="btn btn-primary">
            Add
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddTask;
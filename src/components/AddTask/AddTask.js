import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { ListContext } from '../../contexts/ListContext';

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskText: "",
      show: false
    }
  }

  static contextType = ListContext;

  handleChange = (event) => {
    this.setState({ taskText: event.target.value });
  }

  handleClose = () => {
    this.setState({
      taskText: "",
      show: false
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleAdd = (e) => {
    e.preventDefault();
    const { dispatch } = this.context;
    dispatch({type: 'ADD_TASK', task: this.state.taskText});
    this.setState({
      show: false,
      taskText: ""
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <h3 className="AddTask-header">React Task Manager</h3>
        </div>
        <div className="col-sm-4">
          <button type="button" className="btn btn-success AddTask-button" onClick={this.handleShow}>Add</button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>React Task Manager</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleAdd}>
              <Form.Group className="form-group">
                <Form.Control
                  type="text"
                  value={this.state.taskText}
                  onChange={this.handleChange}
                  className="form-control"
                  id="inputTask"
                  placeholder="Enter task to add"
                >
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button onClick={this.handleAdd} className="btn btn-primary">
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddTask;
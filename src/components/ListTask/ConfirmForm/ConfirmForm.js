import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { ListContext } from '../../../contexts/ListContext';

class ConfirmForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  static contextType = ListContext;

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleCloseSave = () => {
    const { dispatch } = this.context;
    dispatch({ type: 'REMOVE_BOOK', index: this.props.index });
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <Button size="sm" variant="warning" onClick={this.handleShow}>
          Delete
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning message</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCloseSave}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default ConfirmForm;
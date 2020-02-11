import React from 'react'
import { Row, ListGroup, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import ConfirmDeleteForm from './ConfirmDeleteForm/ConfirmDeleteForm.js'
import EditTask from './EditTask/EditTask.js'
import './ListTask.css'

const ListTask = () => {
  const tasks = useSelector((state) => state);
  const showListDone = (isDone) => {
    return tasks.map((task, i) => {
      if (task.isDone === isDone) {
        return <ListGroup.Item
          key={i}
          className="draggable-elem"
        >
          {task.text}
          <Row>
            <ConfirmDeleteForm index={i} />
            <EditTask task={tasks[i]} index={i} />
          </Row>
        </ListGroup.Item>
      }
    })
  }

  return (
    <Row>
      <Col>
        <h4>{'Active'}</h4>
        <ListGroup>
          {showListDone(false)}
        </ListGroup>
      </Col>
      <Col>
        <h4>{'Done'}</h4>
        <ListGroup>
          {showListDone(true)}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default ListTask;


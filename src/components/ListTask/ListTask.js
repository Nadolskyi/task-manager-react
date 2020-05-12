import React from 'react'
import { useDispatch } from 'react-redux';
import { Row, ListGroup, Col } from 'react-bootstrap'
import ConfirmDeleteForm from './ConfirmDeleteForm/ConfirmDeleteForm.js'
import EditTask from './EditTask/EditTask.js'
import { editTask } from '../../actions/actions';
import './ListTask.css'

const ListTask = ({ tasks }) => {

  const dispatch = useDispatch();

  const onDragStart = (e, text) => {
    e.dataTransfer.setData("text", text)
  }

  const onDragOver = (e) => {
    e.preventDefault();
  }

  const onDrop = (e, isDone) => {
    let text = e.dataTransfer.getData("text");
    tasks.filter((task, index) => {
      if (task.text === text) {
        task.isDone = isDone;
        dispatch(editTask(index, text, isDone))
      }
    })
  }

  const showListDone = (isDone) => {
    return tasks.map((task, i) => {
      if (task.isDone === isDone) {
        return <ListGroup.Item
          key={i}
          className="draggable-elem"
          draggable
          onDragStart={(e) => onDragStart(e, task.text)}
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
      <Col
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, false)}
      >
        <h4>{'Active'}</h4>
        <ListGroup>
          {showListDone(false)}
        </ListGroup>
      </Col>
      <Col
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, true)}
      >
        <h4>{'Done'}</h4>
        <ListGroup>
          {showListDone(true)}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default ListTask;


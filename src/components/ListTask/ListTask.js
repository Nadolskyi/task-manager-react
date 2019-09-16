import React, { useContext } from 'react'
import { Row, ListGroup, Col } from 'react-bootstrap'
import ConfirmForm from './ConfirmForm/ConfirmForm.js'
import EditTask from './EditTask/EditTask.js'
import { ListContext } from '../../contexts/ListContext.js';

const ListTask = ({ smth, onDelete, editTask }) => {

  const { tasks } = useContext(ListContext);
  const showList = () => {
    return tasks.map((task, i) =>
      <ListGroup.Item key={i}>
        {task}
        <Row>
          <ConfirmForm index={i} />
          <EditTask task={tasks[i]} index={i} />
        </Row>
      </ListGroup.Item>
    )
  }
  
  return (
    <Row>
      <Col>
        <ListGroup>
          {showList()}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default ListTask;


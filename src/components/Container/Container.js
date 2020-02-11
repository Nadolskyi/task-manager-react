import React, { Component } from 'react'
import './Container.css'
import ListTask from '../ListTask/ListTask'
import AddTask from '../AddTask/AddTask'

class Container extends Component {
  render() {
    return (
      <div className="container Container-marginTop Container-color">
        <AddTask />
        <ListTask />
      </div>
    );
  }
}

export default Container;
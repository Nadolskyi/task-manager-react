import React, { Component } from 'react'
import './Container.css'
import ListTask from '../ListTask/ListTask'
import AddTask from '../AddTask/AddTask'
import ListContextProvider from '../../contexts/ListContext';

class Container extends Component {
   render() {
    return (
      <div className="container Container-marginTop Container-color">
        <ListContextProvider>
          <AddTask />
          <ListTask />
        </ListContextProvider>
      </div>
    );
  }
}

export default Container;
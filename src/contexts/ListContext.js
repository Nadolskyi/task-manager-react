import React, { createContext, Component } from 'react';

export const ListContext = createContext();

class ListContextProvider extends Component {
  state = {
    tasks: [
      'Cras justo odio',
      'Dapibus ac facilisis in',
      'Morbi leo risus',
      'Porta ac consectetur ac',
      'Vestibulum at eros'
    ]
  }

  deleteFromList = (i) => {
    const tasksArr = this.state.tasks;
    tasksArr.splice(i, 1);
    this.setState({ tasks: tasksArr });
  }

  addTask = (task) => {
    const tasksArr = this.state.tasks;
    tasksArr.push(task);
    this.setState({ tasks: tasksArr });
  }

  editTask = (newText, i) => {
    const tasksArr = this.state.tasks;
    tasksArr[i] = newText;
    this.setState({ tasks: tasksArr });
  }

  render() {
    return (
      <ListContext.Provider
        value={{
          ...this.state,
          editTask: this.editTask,
          deleteFromList: this.deleteFromList,
          addTask: this.addTask
        }}
      >
        {this.props.children}
      </ListContext.Provider>
    );
  }
}

export default ListContextProvider;
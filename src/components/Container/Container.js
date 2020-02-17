import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Container.css'
import ListTask from '../ListTask/ListTask'
import AddTask from '../AddTask/AddTask'
import { getTasks } from '../../actions/actions'

export class Container extends Component {

  componentDidMount() {
    this.props.onGetTasks();
  }

  render() {
    return (
      this.props.tasks.length ? <div className="container Container-marginTop Container-color">
        <AddTask />
        <ListTask tasks = {this.props.tasks} />
      </div> : <h1>Loading...</h1>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state
});

const mapDispatchToProps = dispatch => ({
  onGetTasks: () => setTimeout(() => dispatch(getTasks()), 1000),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
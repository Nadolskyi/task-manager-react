import React, { Component } from 'react'
class ListTask extends Component {
    state = {
        listGroup: [
            'Cras justo odio',
            'Dapibus ac facilisis in',
            'Morbi leo risus',
            'Porta ac consectetur ac',
            'Vestibulum at eros'
        ]
    }

    showList() {
        return this.state.listGroup.map((task, i) =>
            <li className="list-group-item" key = {i}>{task}</li>
        )
    }

    render() {
        return (
        <div className="row">
        <div className="col-sm-12">
          <ul className="list-group">
            {this.showList()}
          </ul>
        </div>
      </div>
      );
    }
}

export default ListTask;
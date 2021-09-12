import React, { Component } from 'react';
import { Navbar } from './components/Navbar'
import { TodoRows } from './components/TodoRows';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        { action: 'bla1', done: false },
        { action: 'bla2', done: false },
        { action: 'bla3', done: false },
      ],
      newToDo: '',
    }
  }

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRows key={item.action} item={item} callback={this.toggleDone} />
    ));

  updateValue = (event) => {
    this.setState({
      newToDo: event.target.value
    })
  }

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    })

  addnewTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newToDo, done: false },
      ]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar
            userName={this.props.userName}
            onClick={this.changeStateData} />
          <div className="col-12 text-center">
            <input
              className="form-control"
              value={this.state.newToDo}
              onChange={this.updateValue} />
            <button
              className="btn btn-primary m-3 p-3"
              onClick={this.addnewTodo}>
              add
            </button>
          </div>
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

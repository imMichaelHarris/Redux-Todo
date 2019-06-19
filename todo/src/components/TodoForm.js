import React from "react";
import {connect} from 'react-redux';

import {addTodo} from '../actions'

class TodoForm extends React.Component {
  state = {
    name: ""
  };

  submitTodo = e => {
    e.preventDefault();
    const newTodo = {
      value: this.state.name,
      completed: false,
      id: Date.now()
    }
    this.props.addTodo(newTodo)
    this.setState({name: ''})
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form className="todo-form" onSubmit={this.submitTodo}>
        <p>What's next?</p>
        <input
          type="text"
          name="name"
          value={this.state.name}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return{
    todos: state.todos
  }
}
export default connect(mapStateToProps, { addTodo })(TodoForm);

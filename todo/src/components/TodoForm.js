import React from "react";
import {connect} from 'react-redux';

import {addTodo} from '../actions'

class TodoForm extends React.Component {
  state = {
    name: ""
  };

  submitTodo = e => {
    e.preventDefault();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form className="todo-form">
        <p>What's next?</p>
        <input
          type="text"
          name="name"
          value={this.state.name}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button>Submit</button>
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

import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => (
          <Todo todo={todo} key={todo.id} toggleTodo={this.props.toggleTodo} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList);

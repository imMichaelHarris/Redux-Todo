import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => (
          <Todo todo={todo} key={todo.id} />
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

export default connect(mapStateToProps)(TodoList);

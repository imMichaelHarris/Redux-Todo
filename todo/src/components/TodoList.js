import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

import Todo from "./Todo";

const TodoList = (props) => {
  console.log('list', props)
    return (
      <div className="todo-list">
        {props.todos.map(todo => (
          <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
        ))}
      </div>
    );

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

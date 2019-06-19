import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions";

const Todo = props => {
  const { toggleTodo, deleteTodo, todo } = props;
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <h3 onClick={() => toggleTodo(todo.id)}>{todo.value}</h3>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { toggleTodo, deleteTodo }
)(Todo);

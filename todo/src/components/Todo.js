import React from "react";
import { connect } from "react-redux";
import { toggleTodo} from '../actions'


const Todo = props => {
  const {toggleTodo, todo} = props;
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <h3>{todo.value}</h3><button onClick={() => toggleTodo(todo.id)}>Done</button>
    </div>
  );
};

export default connect(null, {toggleTodo})(Todo);

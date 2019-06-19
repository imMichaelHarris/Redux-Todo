import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    hide: false
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ hide: true})
    },5000)
  }

  render() {
    return (
      <div className="todo-list">
        <h4 className={`${this.state.hide ? 'hide' : ''}`}>Click todo item to mark as completed.</h4>
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

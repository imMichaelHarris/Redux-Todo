import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      {this.props.todos.map(todo => {
        <h2>{todo.value}</h2>;
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default App;

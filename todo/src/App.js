import React from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;

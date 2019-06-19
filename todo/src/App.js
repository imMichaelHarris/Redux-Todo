import React from "react";
import "./App.scss";
import TodoContainer from './components/TodoContainer'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
    <TodoContainer />

    </div>
  );
}

export default App;

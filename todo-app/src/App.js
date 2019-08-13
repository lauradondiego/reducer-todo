import React from "react";
import "./App.css";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { initialState, todoReducer } from "./reducers/todoReducer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: initialState
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>To Do List:</h2>
          {/* <Todo /> */}
          <TodoForm />
          <TodoList />
          {/* <TodoForm
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} /> */}{" "}
        </div>
      </div>
    );
  }
}

export default App;

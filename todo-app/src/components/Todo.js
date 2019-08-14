import React, { useState, useReducer } from "react";

const Todo = props => {
  return (
    <div onClick={() => props.toggleTodo(props.todo.id)}>{props.todo.item}</div>
  );
};

export default Todo;

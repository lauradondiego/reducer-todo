import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("todo props", props);
  return (
    <div className="todo-list">
      {props.todo}
      <Todo />
      {/* {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))} */}
    </div>
  );
};

export default TodoList;

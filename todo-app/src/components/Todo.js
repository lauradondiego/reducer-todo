import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../reducers/todoReducer";

const Todo = props => {
  const [newTodoText, setNewTodoText] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("initial state data", state);

  const handleChanges = e => {
    setNewTodoText(e.target.value);
  };

  return (
    <div>
      {!state.completed ? (
        <h1>
          {state.item}{" "}
          <i
            className="completedTodo"
            onClick={() => dispatch({ type: "TOGGLE_TODO" })}
            //dispatch is sending an action which are objects w/property named "type
            // to the reducer telling it what to do
          />
        </h1>
      ) : (
        <div>
          <input
            className="item-input"
            type="text"
            name="newTodoText"
            value={newTodoText}
            onChange={handleChanges}
          />
          <button
            onClick={() => dispatch({ type: "ADD_TODO", payload: newTodoText })}
          >
            Update todo
          </button>
        </div>
      )}
    </div>
  );
};
//   className={`item${props.item.completed ? " completed" : ""}`}

//       <p>{props.item.name}</p>
//     </div>
//   );
// };

export default Todo;

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        completed: !state.completed
      };
    case "ADD_TODO":
      return {
        ...state,
        item: action.payload,
        completed: !state.completed,
        id: Date.now()
      };
    case "CLEAR_TODO":
      return {
        ...state,
        completed: state.completed
      };
    default:
      return state;
  }
};

// toggleItem = id => {
//   this.setState({
//     todo: this.state.todo.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           completed: !item.completed
//         };
//       } else {
//         return item;
//       }
//     })
//   });
// };

// addItem = itemName => {
//   const newItem = {
//     name: itemName,
//     id: Date.now(),
//     completed: false
//   };
//   this.setState({
//     todo: [...this.state.todo, newItem]
//   });
// };

// clearCompleted = () => {
//   this.setState({
//     todo: this.state.todo.filter(task => !task.completed)
//   });
// };

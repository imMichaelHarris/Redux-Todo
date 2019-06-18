const initialState = {
  todos: [
    { value: "Test todo", completed: false, id: 0 },
    { value: "Another todo", completed: false, id: 1 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};

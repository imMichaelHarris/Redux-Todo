const initialState = {
  todos: [
    { value: "Test todo", completed: false },
    { value: "Another todo", completed: false}
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

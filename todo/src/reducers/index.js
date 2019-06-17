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
        title: action.payload
      };
    default:
      return state;
  }
};

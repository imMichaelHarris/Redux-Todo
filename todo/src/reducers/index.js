import { ADD_TODO } from "../actions";
import { TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    { value: "Test todo", completed: false, id: 0 },
    { value: "Another todo", completed: false, id: 1 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
        console.log(action)
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};

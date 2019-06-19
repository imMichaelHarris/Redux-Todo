import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";


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
      case DELETE_TODO:
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        }
    default:
      return state;
  }
};

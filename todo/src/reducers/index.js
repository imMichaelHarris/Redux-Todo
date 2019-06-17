const initialState = {
    todos: [
        {title: 'Test todo'},
        {title: 'Another todo'}
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_TODO": 
        return {
            ...state,
            title: action.payload
        };
        default: return state;
    }
}
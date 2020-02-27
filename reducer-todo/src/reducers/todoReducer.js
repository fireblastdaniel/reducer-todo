export const initialState = {
    todoList: []
}

export const todoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: new Date()
            }
            return {
                ...state,
                todoList: [...state.todoList, newTodo]
            };
        case 'TOGGLE_COMPLETE':
            return { 
                ...state,
                todoList: state.todoList.map( item => {
                    if(item.id === action.payload)
                        return {...item, completed: !item.completed};
                    else
                        return item;
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todoList: state.todoList.filter( item => item.completed === false )
            }
        default:
            return state;
    }
};
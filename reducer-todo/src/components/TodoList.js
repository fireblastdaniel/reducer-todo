import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state)

    const [newTodoItem, setNewTodoItem] = useState('')

    const handleChanges = e => {
        setNewTodoItem(e.target.value);
    };

    const addToDo = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newTodoItem });
    }

    return (
        <div className='container'>
            <h1>My First To Do List</h1>
            <form>
                <input
                    type='text'
                    placeholder='New Item'
                    onChange={ handleChanges }
                    className='input'
                />
                <input
                    type='submit'
                    onClick={addToDo}
                    className='submit-btn'
                />
                <input
                    type='button'
                    value='Clear Completed'
                    onClick={ () => dispatch({ type: 'CLEAR_COMPLETED' })}
                    className='clear-btn'
                />
            </form>
            <ul>
                {state.todoList.map( item => (
                    <li 
                        key={item.id} 
                        onClick={ () => dispatch({ type: 'TOGGLE_COMPLETE', payload: item.id }) }
                        className={item.completed ? 'complete' : ''}
                    >{item.item}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
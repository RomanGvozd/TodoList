import React, {useState} from 'react';

import './TodoItem.scss';

function TodoItem(props) {
    const {todo, deleteTodo, selectTodo} = props;

    const selectTodoClick = () => {
        selectTodo(todo);
    };

    const deleteTodoClick = () => {
        deleteTodo(todo.id);
    };

    return (
        <li className='todo-item '>
            <p 
            className={todo.isDone ? "todo-item__title todo-item__title-completed" : "todo-item__title"}
            onClick={selectTodoClick}
            >
            {todo.title}
            </p>
            <p className='todo-item__time '>{todo.time}</p>
            <button className='todo-item__delete' onClick={deleteTodoClick}>X</button>
        </li>
    );
}

export default TodoItem;

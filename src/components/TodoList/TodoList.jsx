import React from "react";
import {useDispatch, useSelector} from "react-redux";
import TodoItem from '../TodoItem/TodoItem';

import {submitItem} from '../../common/store/actions/actions';
import {deleteItem} from '../../common/store/actions/actions';

import './TodoList.scss';

function TodoList() {
  const todos = useSelector((store) => store.list);
  const dispatch = useDispatch();

  const selectTodo = (id) => {
    dispatch(submitItem(id));
  };

  const deleteTodo = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <section className='todo-list'>
      <ul>
        {todos.map(todo => (
          <TodoItem 
          selectTodo={selectTodo}
          deleteTodo={deleteTodo}
          todo={todo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
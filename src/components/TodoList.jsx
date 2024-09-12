import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
const TodoList = () => {
    //callback function
  const selectTodos = (state) => state.todos; 

  const returnedTodos = useSelector(selectTodos);

  const displayTodos = returnedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));
  return <div>{displayTodos}</div>;
};
export default TodoList
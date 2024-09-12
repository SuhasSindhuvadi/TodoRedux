import React from 'react'
import { useDispatch } from 'react-redux'

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    //complete Todo
    const onComplete = (id) => {
        return dispatch({
          type: "ADD_TODO",
          payload: id,
        });
      };

       //delete a todo
  const onDelete = (id) => {
    return dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
     <div>
      <h3>
        {todo.item}
      </h3>
      <div>
        <button  id="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
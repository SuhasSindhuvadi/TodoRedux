import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const TodoInput = () => {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_TODO",
            payload: { id: Math.floor(Math.random() * 3000), item: todo }
        })
        setTodo("")
    }

    return (
        <div>
            <form className='todo_form_container' onSubmit={handleSubmit}>
                <input
                    className='todo_input'
                    type='text'
                    placeholder='Enter Todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className='todo_button'>Add</button>
            </form>
        </div>
    )
}

export default TodoInput
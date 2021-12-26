import React from 'react'

const Todo = ({todo, deleteTodo}) => {
    
    return (
        <div>
            {todo.title} - {todo.description}
            <button onClick={() =>deleteTodo(todo.id)}>delete todo</button>
        </div>
    )
}

export default Todo

import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo}) => {

    return (
        <div>
           {
               todos.map(todo =>  <Todo deleteTodo={deleteTodo} key={todo.id} todo={todo}/>)
           }
        </div>
    )
}

export default TodoList

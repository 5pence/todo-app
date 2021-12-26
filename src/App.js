import React, { Component } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export class App extends Component {


  state = {
    todos: [
      { id: 1, title: 'Sleep', description: "going home to sleep" },
      { id: 2, title: 'Eat', description: "gonna eat dinner" }
    ]
  }

  addTodo = (todo) => {
    console.log(todo, "<===from app.js")
    const myTodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description
    }

    this.setState({
      todos: [...this.state.todos, myTodo]
    })

  }

  deleteTodo = (id) => {

    const filteredTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: filteredTodos })
  }



  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        {this.state.todos.length > 0 ? <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} /> : <p>no todos available</p>}
      </div>
    )
  }
}

export default App

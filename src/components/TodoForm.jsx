import React, { Component } from 'react'

export class TodoForm extends Component {

    state = {
        title: "",
        description: ""
    }


    handleChange = (e) => {

        console.log(e.target.name)
       
        this.setState({
            ...this.state, [e.target.name]: e.target.value
        })
        

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: "",
            description: ""
        })
    }

    
    render() {

        return (
           <form onSubmit={this.handleSubmit}>
               <input value={this.state.title} onChange={this.handleChange} type="text" name="title"  placeholder='title'/>
               <input value={this.state.description} onChange={this.handleChange}  type="text" name="description" placeholder='description...' />
               <button>Submit</button>
           </form>
        )
    }
}

export default TodoForm

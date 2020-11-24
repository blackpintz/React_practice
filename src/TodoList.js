import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }; 
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    create(Todo) {
        this.setState({
            todos: [...this.state.todos, Todo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }

    update(id, content) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: content};
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }
    render() {
        return (
            <div>
            <h1>Todo List!</h1>
            <NewTodoForm createTodo={this.create}/>
            <ul>
               {this.state.todos.map(todo => {
                  return <Todo key={todo.id}
                   id = {todo.id}
                   task = {todo.task}
                   removeTodo = {this.remove}
                   updateTodo = {this.update}/>  
               })}
            </ul>
            </div>
        )
    }
}

export default TodoList
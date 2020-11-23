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
        let myTodos = this.state.todos
        this.setState({
            todos: this.state.todos.splice(this.state.todos.indexOf({id: id}), 0, content)
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
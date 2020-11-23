import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id)
    }
    toggleForm () {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    render() {
        if(this.state.isEditing) {
            return (
                <EditTodoForm updateTodo = {this.props.updateTodo} id={this.props.id} task={this.props.task} toggleForm={this.toggleForm}/>
            )
        } else {
            return (
                <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemove}>Delete</button>
                <li>{this.props.task}</li>
                </div>
            )
        }
    }
}

export default Todo
import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id)
    }
    toggleForm () {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTodo(this.state.id, this.state.task)
        this.toggleForm();
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        if(this.state.isEditing) {
            return (
                <form onSubmit = {this.handleSubmit}>
                <input 
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.handleChange}/>
                <button>Save</button>
            </form>
            )
        } else {
            return (
                <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemove}>Delete</button>
                <li>{this.state.task}</li>
                </div>
            )
        }
    }
}

export default Todo
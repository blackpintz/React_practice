import React, { Component } from 'react';

class EditTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: this.props.task, id: this.props.id}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.toggleForm()
        this.props.updateTodo(this.state.id, this.state)
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
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
    }
}

export default EditTodoForm;
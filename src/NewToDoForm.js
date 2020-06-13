import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewToDoForm.css'

class NewToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const newToDo = { ...this.state, id: uuidv4(), completed: false }
        this.props.createTodo(newToDo);
        this.setState({
            task: ''
        });
    }

    render() {


        return (

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New ToDo: </label>
                <input type="text" placeholder="New ToDo" name="task" id="task" value={this.state.task}
                    onChange={this.handleChange}
                />
                <button className="CreateTodo"> Create ToDo</button>
            </form>
        )
    }
}

export default NewToDoForm;
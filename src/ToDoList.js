import React, { Component } from 'react';
import "./ToDoList.css";
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);

    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }


    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }


            }
            else {
                return todo
            }
        });
        this.setState({
            todos: updatedTodos
        })

    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }


            }
         return todo;
        });
        this.setState({
            todos: updatedTodos
    });
    }

    render() {

        const todos = this.state.todos.map(todo => {

            return (<ToDo 
            task={todo.task} 
            key={todo.id} 
            id={todo.id} 
            removeTodo={this.remove} 
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
            completed={todo.completed}

            />
            );
        })
        return (
            <div className="ToDoList">

                <h1>To Do List</h1>
                <ul>

                    {todos}

                </ul>
                <NewToDoForm createTodo={this.create} />
            </div>
        );
    }
}
export default ToDoList;
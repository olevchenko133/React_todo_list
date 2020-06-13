import React, { Component } from 'react'
import './ToDo.css'
class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state={
            isEditing: false,
            task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    toggleForm(){
        this.setState({
            isEditing: !this.setState.isEditing
        })
    }
    handleEdit(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        })
    }
   handleToggle(){
    this.props.toggleTodo(this.props.id);
   }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} onChange={this.handleEdit} name="task"/>
                        <button>Save</button>
                    </form>
                </div>
            ) 
        }

else{
    result=(
        <div className="ToDo">


                <li className={this.props.completed && "completed" } onClick={this.handleToggle}>  {this.props.task} </li>
               <div className="Btns">  <button onClick={this.toggleForm}>Edit </button> 
                <button onClick={this.handleRemove}> X </button></div>


            </div>
    )
}        
        return result
    }
}

export default ToDo;
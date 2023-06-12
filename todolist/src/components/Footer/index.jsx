import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

    addTodo = () => {
        const text = this.inputRef.current.value;
        console.log(text);
        return this.props.addTodo(text);
    }

    inputRef = React.createRef();

    deleteTodo = () => {
        return this.props.deleteTodo();
    }
    render() {
        return (
            <footer>
                <input type="text" placeholder="Please enter your task and Add" ref={this.inputRef}/>
                <div className="controller">
                    <button className='add' onClick={this.addTodo} >Add</button>
                    <button className='delete' onClick={this.deleteTodo}>Delete</button>
                </div>
            </footer>
        )
    }
}

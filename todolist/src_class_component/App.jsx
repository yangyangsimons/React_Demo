import React, { Component } from 'react';
import Header from './components/Header/index';
import List from './components/List/index';
import Footer from './components/Footer/index';
import './App.css';

export default class App extends Component {
  state = {todos: [
    {id: 0, text: 'You are the best,keep going', date: 'Today', done: false}
  ]}
  // update the checked item;
  updateTodo = (id, done) => {
    const {todos} = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return {...todoObj,done: done};
      } else {
        return todoObj;
      }
    })
    this.setState({todos: newTodos});
  }

  // add one todo item in the list
  addTodo = (text) => {
    const {todos} = this.state;
    const id = todos[todos.length - 1].id + 1;
    const date = new Date();
    const dateText = date.toLocaleDateString('en-UK',{day:'numeric', month:'long', year: 'numeric'});
    const newTodos = [...todos,{id, date: dateText, text, done: false}]
    this.setState({todos: newTodos});
    
  }

  deleteTodo = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.done !== true;
    })

    this.setState({todos: newTodos});
  }
  selectAll = (checked) => {
    let newTodos = {};
    if (checked) {
      newTodos = this.state.todos.map((todoObj) => {
        return {...todoObj, done: true};
      })
    } else {
      newTodos = this.state.todos.map((todoObj) => {
        return {...todoObj,done: false};
      })
    }
    this.setState({todos: newTodos});
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <Header />
        <List todos={todos} updateTodo={this.updateTodo} selectAll={this.selectAll}/>
        <Footer addTodo={this.addTodo} deleteTodo={this.deleteTodo}/>
      </div>

    )
  }
}

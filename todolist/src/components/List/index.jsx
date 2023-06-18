import React, { Component } from 'react'
import './index.css';
export default class List extends Component {

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
   
  selectAll = (event) => {
    return this.props.selectAll(event.target.checked);
  }
  render() {
    const { todos} = this.props;
    const doneCount = todos.reduce((pre,current) => {
      return pre + (current.done ? 1 : 0);
    }, 0)
    const total = todos.length;
    return (
      <div className='main'>
        <div className="banner">
          <span className='total'>8 Todos</span>
          <span className='selectAll'>View all</span>
        </div>
        <ul>
          <li className='infoContainer'>
            <input type="checkbox" checked={doneCount === total ? true : false} onChange={this.selectAll}/>
            <span>Date</span><span>Task</span>
          </li>
        </ul>
        <ul className="taskList">
          {
            todos.map((todoObj) => {
              const { id, text, date, done } = todoObj;
              return (
                <li className={`info ${done ? 'selected' : ''}`} key={id}>
                  <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                  <span className="date">{date}</span>
                  <span className='task'>{text}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

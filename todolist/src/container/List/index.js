import React from 'react';
import './index.css';
export default function List(props) {
  function updateTodo(id) {
    console.log(id);
    return props.updateTodo(id);
  }

  return (
    <div className='main'>
      <div className="banner">
        <span className='total'>8 Todos</span>
        <span className='selectAll'>View all</span>
      </div>
      <ul>
        <li className='infoContainer'>
          <input type="checkbox" />
          <span>Task</span><span>Date</span>
        </li>
      </ul>
      <ul className="taskList">
        {
          props.todos.map((todoObj) => {
            const { id, text, date, done } = todoObj;
            return (
              <li className={`info ${done ? 'selected' : ''}`} key={id}>
                <input type='checkbox' onChange={() => {updateTodo(id)}} />
                <span className='task'>{text}</span>
                <span className='date'>{date}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

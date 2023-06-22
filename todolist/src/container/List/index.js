import React, {useRef} from 'react';
import './index.css';

export default function List(props) {
  const selectAllRef = useRef();

  function updateTodo(id) {
    return props.dispatch({type:"UPDATE", payload: {id}});
  }
  function selectAll() {
    console.log(selectAllRef.current.checked);
    return props.dispatch({type: "SELECTALL", payload: {done: selectAllRef.current.checked}});
  }

  const countDone = props.todos.reduce((pre,cur) => {
    pre += cur.done ? 1 : 0;
    return pre;
  }, 0)
  console.log(countDone);
  return (
    <div className='main'>
      <div className="banner">
        <span className='total'>8 Todos</span>
        <span className='selectAll'>View all</span>
      </div>
      <ul>
        <li className='infoContainer'>
          <input type="checkbox" checked={(props.todos.length === countDone && props.todos.length !== 0) ? true : false} onChange={selectAll} ref={selectAllRef}/>
          <span>Task</span><span>Date</span>
        </li>
      </ul>
      <ul className="taskList">
        {
          props.todos.length === 0 ? 
          <h3>what do you want to do today?</h3> :
          props.todos.map((todoObj) => {
            const { id, text, date, done } = todoObj;
            return (
              <li className={`info ${done ? 'selected' : ''}`} key={id}>
                <input type='checkbox' checked = {done ? true : false} onChange={() => {updateTodo(id)}} />
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

import React, { useRef } from 'react';
import './index.css';
export default function Footer(props) {
  const inputRef = useRef();
  function addTodo() {
    const text = inputRef.current.value;
    inputRef.current.value = '';
    return props.dispatch({
      type: "ADD",
      payload: {text}
    });
  }
  function deleteTodo() {
    return props.dispatch({type: "DELETE"});
  }
  return (
    <footer>
      <input type="text" placeholder="Please enter your task and Add" ref={inputRef} />
      <div className="controller">
        <button className='add' onClick={addTodo}>Add</button>
        <button className='delete' onClick={deleteTodo}>Delete</button>
      </div>
    </footer>
  )
}
